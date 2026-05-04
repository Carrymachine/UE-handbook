import fs from 'node:fs';
import path from 'node:path';
import {execSync} from 'node:child_process';

const repoRoot = process.cwd();
const announcementsPath = path.join(repoRoot, 'docs', 'announcements.md');
const versionFilePath = path.join(
  repoRoot,
  '.github',
  'announcement-version.json',
);
const startMarker = '{/* AUTO-ANNOUNCEMENTS:START */}';
const endMarker = '{/* AUTO-ANNOUNCEMENTS:END */}';
const emptyState = '_자동 기록이 아직 없습니다._';

function sh(command, options = {}) {
  return execSync(command, {
    cwd: repoRoot,
    encoding: 'utf8',
    stdio: ['pipe', 'pipe', 'pipe'],
    ...options,
  }).trim();
}

function gitFileExists(ref, filePath) {
  try {
    sh(`git cat-file -e ${ref}:${filePath}`);
    return true;
  } catch {
    return false;
  }
}

function resolveBeforeSha(afterSha) {
  const before = process.env.GITHUB_EVENT_BEFORE?.trim();
  if (!before || /^0+$/.test(before)) {
    return sh(`git rev-parse ${afterSha}^`);
  }

  try {
    return sh(`git rev-parse ${before}`);
  } catch {
    return sh(`git rev-parse ${afterSha}^`);
  }
}

function readFileAtRef(filePath, ref) {
  if (ref === 'HEAD' && fs.existsSync(path.join(repoRoot, filePath))) {
    return fs.readFileSync(path.join(repoRoot, filePath), 'utf8');
  }

  if (!gitFileExists(ref, filePath)) {
    return '';
  }

  return sh(`git show ${ref}:${filePath}`);
}

function getDocTitle(filePath, ref = 'HEAD') {
  const content = readFileAtRef(filePath, ref);
  if (!content) {
    return path.basename(filePath, path.extname(filePath));
  }

  const headingMatch = content.match(/^#\s+(.+)$/m);
  if (headingMatch) {
    return headingMatch[1].trim();
  }

  return path.basename(filePath, path.extname(filePath));
}

function parseChangedFiles(beforeSha, afterSha) {
  const diffOutput = sh(
    `git diff --name-status --find-renames ${beforeSha} ${afterSha}`,
  );

  if (!diffOutput) {
    return [];
  }

  return diffOutput.split('\n').map((line) => {
    const parts = line.split('\t');
    const rawStatus = parts[0];
    const status = rawStatus[0];

    if (status === 'R') {
      return {
        status: 'M',
        oldPath: parts[1],
        path: parts[2],
      };
    }

    return {
      status,
      path: parts[1],
    };
  });
}

function parseCommitSubjects(beforeSha, afterSha) {
  const output = sh(`git log --format=%s ${beforeSha}..${afterSha}`);
  return output ? output.split('\n').filter(Boolean) : [];
}

function determineBumpType(subjects) {
  const joined = subjects.join('\n').toLowerCase();
  if (joined.includes('[major]') || joined.includes('#major')) {
    return 'major';
  }
  if (joined.includes('[minor]') || joined.includes('#minor')) {
    return 'minor';
  }
  return 'patch';
}

function bumpVersion(currentVersion, bumpType) {
  const [major, minor, patch] = currentVersion.split('.').map(Number);
  if ([major, minor, patch].some(Number.isNaN)) {
    throw new Error(`Invalid version format: ${currentVersion}`);
  }

  switch (bumpType) {
    case 'major':
      return `${major + 1}.0.0`;
    case 'minor':
      return `${major}.${minor + 1}.0`;
    default:
      return `${major}.${minor}.${patch + 1}`;
  }
}

function uniq(values) {
  return [...new Set(values)];
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function mapInfraLabel(filePath) {
  if (filePath === 'docusaurus.config.ts') return '사이트 설정';
  if (filePath === 'sidebars.ts') return '사이드바 구조';
  if (filePath === 'README.md') return 'README';
  if (filePath === 'src/css/custom.css') return '전역 테마 스타일';
  if (filePath.startsWith('.github/workflows/')) {
    return `GitHub Actions: ${path.basename(filePath)}`;
  }
  if (filePath.startsWith('static/')) {
    return `정적 자산: ${path.basename(filePath)}`;
  }
  if (filePath.startsWith('src/')) {
    return `프론트엔드: ${filePath.replace(/^src\//, '')}`;
  }
  if (filePath.startsWith('docs/') && filePath.endsWith('_category_.json')) {
    return `문서 카테고리: ${filePath.replace(/^docs\//, '')}`;
  }
  if (filePath.startsWith('scripts/')) {
    return `자동화 스크립트: ${path.basename(filePath)}`;
  }
  return filePath;
}

function categorizeChanges(changedFiles, beforeSha) {
  const addedDocs = [];
  const modifiedDocs = [];
  const deletedDocs = [];
  const infraChanges = [];

  for (const file of changedFiles) {
    if (
      file.path === 'docs/announcements.md' ||
      file.path === '.github/announcement-version.json'
    ) {
      continue;
    }

    if (file.path.startsWith('docs/') && file.path.endsWith('.md')) {
      if (file.status === 'A') {
        addedDocs.push(getDocTitle(file.path, 'HEAD'));
      } else if (file.status === 'D') {
        deletedDocs.push(getDocTitle(file.path, beforeSha));
      } else {
        modifiedDocs.push(getDocTitle(file.path, 'HEAD'));
      }
      continue;
    }

    infraChanges.push(mapInfraLabel(file.path));
  }

  return {
    addedDocs: uniq(addedDocs),
    modifiedDocs: uniq(modifiedDocs),
    deletedDocs: uniq(deletedDocs),
    infraChanges: uniq(infraChanges),
  };
}

function readVersionMeta() {
  return JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
}

function writeVersionMeta(version, lastSourceCommit) {
  fs.writeFileSync(
    versionFilePath,
    `${JSON.stringify({version, lastSourceCommit}, null, 2)}\n`,
    'utf8',
  );
}

function formatList(items) {
  return items.map((item) => `\`${item}\``).join(', ');
}

function buildEntry({
  nextVersion,
  beforeSha,
  afterSha,
  subjects,
  categorized,
}) {
  const date = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'Asia/Seoul',
  }).format(new Date());
  const lines = [
    `### v${nextVersion} · ${date}`,
    '',
    `* 커밋 범위: \`${beforeSha.slice(0, 7)}\` -> \`${afterSha.slice(0, 7)}\``,
  ];

  if (subjects.length > 0) {
    lines.push(`* 커밋 메시지: ${subjects.map((s) => `\`${s}\``).join(', ')}`);
  }

  if (categorized.addedDocs.length > 0) {
    lines.push(`* 문서 추가: ${formatList(categorized.addedDocs)}`);
  }

  if (categorized.modifiedDocs.length > 0) {
    lines.push(`* 문서 수정: ${formatList(categorized.modifiedDocs)}`);
  }

  if (categorized.deletedDocs.length > 0) {
    lines.push(`* 문서 삭제: ${formatList(categorized.deletedDocs)}`);
  }

  if (categorized.infraChanges.length > 0) {
    lines.push(`* 사이트/자동화 수정: ${formatList(categorized.infraChanges)}`);
  }

  lines.push('');
  return lines.join('\n');
}

function hasMeaningfulChanges(categorized) {
  return Object.values(categorized).some((items) => items.length > 0);
}

function updateAnnouncements(entry) {
  const content = fs.readFileSync(announcementsPath, 'utf8');
  const markerPattern = new RegExp(
    `${escapeRegExp(startMarker)}\\n?([\\s\\S]*?)\\n?${escapeRegExp(endMarker)}`,
  );
  const match = content.match(markerPattern);

  if (!match) {
    throw new Error('Auto announcements marker block was not found.');
  }

  const existingBody = match[1].trim();
  const existingEntries =
    existingBody && existingBody !== emptyState ? `${existingBody}\n\n` : '';
  const replacement = `${startMarker}\n${entry.trimEnd()}\n\n${existingEntries}${endMarker}`;
  const updated = content.replace(markerPattern, replacement);

  if (process.env.ANNOUNCEMENTS_DRY_RUN === '1') {
    console.log(updated);
    return true;
  }

  fs.writeFileSync(announcementsPath, updated, 'utf8');
  return true;
}

function main() {
  const afterSha = sh('git rev-parse HEAD');
  const beforeSha = resolveBeforeSha(afterSha);
  const changedFiles = parseChangedFiles(beforeSha, afterSha);

  if (changedFiles.length === 0) {
    console.log('No changed files detected.');
    return;
  }

  const subjects = parseCommitSubjects(beforeSha, afterSha);
  const bumpType = determineBumpType(subjects);
  const versionMeta = readVersionMeta();
  if (versionMeta.lastSourceCommit === afterSha) {
    console.log('Announcement entry already exists for this commit.');
    return;
  }
  const currentVersion = versionMeta.version;
  const nextVersion = bumpVersion(currentVersion, bumpType);
  const categorized = categorizeChanges(changedFiles, beforeSha);
  if (!hasMeaningfulChanges(categorized)) {
    console.log('No eligible handbook changes detected.');
    return;
  }
  const entry = buildEntry({
    nextVersion,
    beforeSha,
    afterSha,
    subjects,
    categorized,
  });

  updateAnnouncements(entry);

  if (process.env.ANNOUNCEMENTS_DRY_RUN !== '1') {
    writeVersionMeta(nextVersion, afterSha);
  }
  console.log(`Updated announcements to v${nextVersion}`);
}

main();

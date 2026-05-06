import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  handbookSidebar: [
    'contributors',
    'announcements',
    'progress',
    {
      type: 'category',
      label: '프로젝트 안내',
      collapsed: false,
      items: ['intro', 'unreal-engine-history'],
    },
    {
      type: 'category',
      label: '학습 경로',
      collapsed: false,
      items: [
        {
          type: 'category',
          label: '초급',
          collapsed: false,
          items: [
            'beginner-course',
            {
              type: 'category',
              label: '1. 개발 환경과 빌드 흐름',
              items: [
                'development-setup/overview',
                'development-setup/editors',
                'development-setup/code-workflow',
                'development-setup/live-coding',
              ],
            },
            {
              type: 'category',
              label: '2. Unreal C++ 코드 읽기',
              items: [
                'coding-standard',
                'unreal-cpp-vs-standard-cpp',
                'prefixes-and-naming',
                'class-header-anatomy',
                'engine-types',
                'object-pointers',
              ],
            },
            {
              type: 'category',
              label: '3. 리플렉션 기본기',
              items: [
                'reflection/overview',
                'reflection/macro-anatomy',
                'reflection/objects',
                'reflection/properties',
                'reflection/class-and-metadata-specifiers',
                'reflection/ufunctions',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '중급',
          collapsed: false,
          items: [
            'intermediate-course',
            {
              type: 'category',
              label: '1. 엔진 타입과 컬렉션',
              items: [
                'architecture/string-overview',
                'architecture/fstring-fname-ftext',
                'containers/overview',
                'containers/tarray',
                'containers/tmap-and-tset',
                'reflection/structs',
              ],
            },
            {
              type: 'category',
              label: '2. 연결과 호출 패턴',
              items: [
                'delegates/overview',
                'delegates/dynamic-and-multicast',
                'reflection/tsubclassof-and-interfaces',
              ],
            },
            {
              type: 'category',
              label: '3. 수명과 참조 관리',
              items: [
                'reflection/object-handling-and-gc',
                'reflection/smart-pointers',
              ],
            },
            {
              type: 'category',
              label: '4. 프로젝트 구조 설계',
              items: [
                'architecture/overview',
                'architecture/modules',
                'architecture/asset-loading-and-references',
                'architecture/data-assets-and-validation',
                'architecture/subsystems-and-tasks',
                'architecture/config-and-versioning',
                'architecture/console-and-commands',
                'architecture/core-redirects',
                'development-setup/programming-tools',
              ],
            },
          ],
        },
        {
          type: 'category',
          label: '심화',
          collapsed: false,
          items: ['advanced-course', 'reflection/advanced-overview'],
        },
      ],
    },
  ],
};

export default sidebars;

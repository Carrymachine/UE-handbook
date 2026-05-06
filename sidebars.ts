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
      label: '개발 환경',
      collapsed: false,
      items: [
        'development-setup/overview',
        'development-setup/editors',
        'development-setup/live-coding',
        'development-setup/code-workflow',
        'development-setup/programming-tools',
      ],
    },
    {
      type: 'category',
      label: '언리얼식 C++',
      collapsed: false,
      items: [
        'coding-standard',
        'unreal-cpp-vs-standard-cpp',
        'prefixes-and-naming',
        'class-header-anatomy',
        'engine-types',
        'object-pointers',
        {
          type: 'category',
          label: '컨테이너',
          items: [
            'containers/overview',
            'containers/tarray',
            'containers/tmap-and-tset',
          ],
        },
        {
          type: 'category',
          label: '델리게이트',
          items: [
            'delegates/overview',
            'delegates/dynamic-and-multicast',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '언리얼 아키텍처',
      collapsed: false,
      items: [
        'architecture/overview',
        'architecture/asset-loading-and-references',
        'architecture/console-and-commands',
        'architecture/core-redirects',
        'architecture/data-assets-and-validation',
        'architecture/modules',
        'architecture/string-overview',
        'architecture/fstring-fname-ftext',
        'architecture/subsystems-and-tasks',
        'architecture/config-and-versioning',
      ],
    },
    {
      type: 'category',
      label: '리플렉션 시스템',
      collapsed: false,
      items: [
        'reflection/overview',
        'reflection/objects',
        'reflection/object-handling-and-gc',
        'reflection/properties',
        'reflection/structs',
        'reflection/tsubclassof-and-interfaces',
        'reflection/class-and-metadata-specifiers',
        'reflection/ufunctions',
        'reflection/smart-pointers',
      ],
    },
  ],
};

export default sidebars;

import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'UE5 C++ 핸드북',
  tagline: '한국어로 읽는 Unreal Engine 5 C++ 학습서',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'jay',
  projectName: 'ue5-docs',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'UE5 C++ 핸드북',
      logo: {
        alt: 'UE5 C++ Handbook Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'handbookSidebar',
          position: 'left',
          label: '핸드북',
        },
        {
          href: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-with-cplusplus-in-unreal-engine?application_version=5.6',
          label: '공식 문서',
          position: 'right',
        },
        {
          href: 'https://typescript-kr.github.io/',
          label: '레이아웃 참고',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: '핸드북',
          items: [
            {
              label: '소개',
              to: '/docs/intro',
            },
            {
              label: '개발 환경',
              to: '/docs/development-setup/overview',
            },
          ],
        },
        {
          title: '참고 자료',
          items: [
            {
              label: 'Epic Programming with C++',
              href: 'https://dev.epicgames.com/documentation/en-us/unreal-engine/programming-with-cplusplus-in-unreal-engine?application_version=5.6',
            },
            {
              label: 'TypeScript Handbook KR',
              href: 'https://typescript-kr.github.io/',
            },
          ],
        },
        {
          title: '바로 가기',
          items: [
            {
              label: '리플렉션',
              to: '/docs/reflection/overview',
            },
            {
              label: '아키텍처',
              to: '/docs/architecture/overview',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} UE5 C++ 핸드북`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

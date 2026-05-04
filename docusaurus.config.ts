import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = 'https://ue-docs-korea.github.io';
const siteBaseUrl = '/UE-handbook/';
const logoImagePath = 'img/logo.png';
const faviconImagePath = 'img/favicon.png';
const logoImageUrl = `${siteUrl}${siteBaseUrl}img/logo.png`;

const config: Config = {
  title: 'UE5 C++ 핸드북',
  tagline: '한국어로 읽는 Unreal Engine 5 C++ 학습서',
  favicon: faviconImagePath,

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: siteBaseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'UE-docs-korea',
  projectName: 'UE-handbook',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },
  headTags: [
    {
      tagName: 'meta',
      attributes: {
        name: 'theme-color',
        content: '#121419',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:image',
        content: logoImageUrl,
      },
    },
    {
      tagName: 'meta',
      attributes: {
        name: 'twitter:image',
        content: logoImageUrl,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: `${siteBaseUrl}img/logo.png`,
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
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
    image: logoImagePath,
    colorMode: {
      defaultMode: 'dark',
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
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

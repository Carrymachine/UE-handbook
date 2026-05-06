import fs from 'node:fs';
import path from 'node:path';
import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const siteUrl = 'https://ue-docs-korea.github.io';
const siteBaseUrl = '/UE-handbook/';
const logoImagePath = 'img/logo.png';
const faviconImagePath = 'favicon.png';
const siteTitle = 'UE5 C++ 핸드북';
const siteDescription =
  'Unreal Engine 5 C++를 한국어로 단계적으로 학습하는 핸드북. 리플렉션, UObject, UPROPERTY, UFUNCTION, 모듈, 자산 참조, 서브시스템까지 UE5 C++ 핵심 개념을 초급부터 심화까지 정리합니다.';
const siteRepoUrl = 'https://github.com/UE-docs-korea/UE-handbook';
const faviconFilePath = path.join(process.cwd(), 'static', 'favicon.png');
const faviconAssetVersion = fs.statSync(faviconFilePath).mtimeMs.toFixed(0);
const faviconAssetPath = `${faviconImagePath}?v=${faviconAssetVersion}`;
const logoImageUrl = `${siteUrl}${siteBaseUrl}img/logo.png`;
const canonicalSiteUrl = `${siteUrl}${siteBaseUrl}`;

const config: Config = {
  title: siteTitle,
  tagline: '한국어로 읽는 Unreal Engine 5 C++ 학습서',
  favicon: faviconAssetPath,

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
      tagName: 'meta',
      attributes: {
        property: 'og:locale',
        content: 'ko_KR',
      },
    },
    {
      tagName: 'meta',
      attributes: {
        property: 'og:site_name',
        content: siteTitle,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'alternate',
        hrefLang: 'ko-KR',
        href: canonicalSiteUrl,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: `${siteBaseUrl}${faviconAssetPath}`,
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'shortcut icon',
        href: `${siteBaseUrl}${faviconAssetPath}`,
      },
    },
    {
      tagName: 'script',
      attributes: {
        type: 'application/ld+json',
      },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: siteTitle,
        url: canonicalSiteUrl,
        description: siteDescription,
        inLanguage: 'ko-KR',
        publisher: {
          '@type': 'Organization',
          name: 'UE Docs Korea',
          url: siteRepoUrl,
          logo: {
            '@type': 'ImageObject',
            url: logoImageUrl,
          },
        },
      }),
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
        sitemap: {
          changefreq: 'weekly',
          priority: 0.7,
          filename: 'sitemap.xml',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: logoImagePath,
    metadata: [
      {
        name: 'description',
        content: siteDescription,
      },
      {
        name: 'keywords',
        content:
          'Unreal Engine 5, UE5, Unreal C++, Unreal Engine C++, UE5 C++ 핸드북, 한국어 Unreal 문서, UPROPERTY, UCLASS, UFUNCTION, UObject, 리플렉션',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'robots',
        content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
      },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'UE5 C++ 핸드북',
      logo: {
        alt: 'UE5 C++ Handbook Logo',
        src: faviconAssetPath,
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

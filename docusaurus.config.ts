import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { FaDiscord, FaGithub, FaSquareXTwitter  } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
const config: Config = {
  title: 'QianCset Docs', //网站标题
  tagline: 'QianCset Web3 Dapp', //网站标语,页面元数据
  favicon: 'img/favicon.ico',//网站图标
  url: 'https://docs.qiancset.com',//网站网址域名,顶级主机名。
  baseUrl: '/',

  organizationName: 'qiancset',
  projectName: 'QianCset-Docs',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  
 //即使不使用国际化，也可以使用此字段来设置有用的元数据，如 HTML lang。
 //例如，如果您的网站是中文的，则您可能想用“zh-Hans”替换“en”。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','zh-Hant','en', 'fr', 'fa','ko','ja','ar','pt',],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:'https://github.com/qiancset/QianCset-Docs/tree/dev',},
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/qiancset/QianCset-Docs/tree/dev',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/favicon.ico',



    navbar: {
      title: 'QianCset',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.ico',
      },
      items: [

        { type: 'docSidebar', sidebarId: 'tutorialSidebar', position: 'left', label: '文档', },
        {to: '/blog', label: '博客', position: 'left'},


        //导航栏文档版本下拉列表
/*         {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {to: '/versions',label: '所有版本',},
            ...ArchivedVersionsDropdownItems.map(
              ([versionName, versionUrl]) => ({
                label: versionName,
                href: versionUrl,
              }),
            ),
            {href: 'https://v3.docusaurus.io',label: '3.x.x', },
            {href: 'https://v2.docusaurus.io',label: '2.x.x', },
            {href: 'https://v1.docusaurus.io',label: '1.x.x', },

          ],
        }, */

         //导航栏区域设置下拉列表
        {
          type: 'localeDropdown',
          position: 'right',
          dropdownItemsAfter: [
            {
              type: 'html',
              value: '<hr style="margin: 0.3rem 0;">',
            },
            {href: 'https://github.com/facebook/docusaurus/issues/3526',
              label: '帮助翻译',
            },
          ],
        },
/*         {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [

          ],
        }, */
        { href: 'https://twitter.com/qiancset', label: 'Twitter', position: 'right', },
        { href: 'https://discord.com/invite/EE4TsKqwzQ', label: 'Discord', position: 'right', },
        { href: 'https://github.com/qiancset', html:'<div>ddd<BsTwitterX/></div>', position: 'right', },
      ],
    },



    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

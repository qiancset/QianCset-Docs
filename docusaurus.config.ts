import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
  url: 'https://qiancset.github.io',//网站网址域名,顶级主机名。
  baseUrl: '/QianCset-Docs/',
  trailingSlash: false,

  favicon: 'img/Q.ico',//网站图标
  title: 'QianCset Docs', //网站标题
  tagline: 'QianCset Web3 Dapp', //网站标语,页面元数据

  organizationName: 'qinjiangban',//拥有部署仓库的 GitHub 用户或组织。
  projectName: 'QianCset-Docs',//部署仓库的名字。
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  //即使不使用国际化，也可以使用此字段来设置有用的元数据，如 HTML lang。
  //例如，如果您的网站是中文的，则您可能想用“zh-Hans”替换“en”。
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['ar','en', /* 'en-US',  */'es', 'fr', 'hi',/* 'ja', 'ko','zh-Hant', */ 'pt','zh-Hans',],
    localeConfigs: {
      en: {
        htmlLang: 'en-GB',
      },
      zh: {
        htmlLang: 'zh-CN',
      },
/*       fa: {
        direction: 'rtl',//表示使用从右向左的文本方向
      }, */
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/qiancset/QianCset-Docs/tree/dev',
        },
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
    
    announcementBar: {
      id: "announcement_bar",
      content:
        '📣  <a href="https://qiancset.com">前往官网</a> ',
      backgroundColor: "#FFFFFF",
      textColor: "#ea7411",
      isCloseable: false,
    },

    image: 'img/favicon.ico',
    navbar: {
      title: 'QianCset',
      logo: {
        alt: 'Logo',
        src: 'img/favicon.ico',
      },
      items: [

        {
          type: 'docSidebar', sidebarId: 'tutorialSidebar',
          position: 'left', label: '文档',
        },
        { to: '/blog', label: '博客', position: 'left' },


        { href: 'https://twitter.com/qiancset', label:'twitter',  position: 'right', },
        { href: 'https://discord.com/invite/EE4TsKqwzQ', label:'discord', position: 'right', },
        { href: 'https://github.com/qiancset', label:'github', position: 'right', },
        //导航栏文档版本下拉列表
        /*         {
                  type: 'docsVersionDropdown',
                  position: 'right',
                  dropdownItemsAfter: [
                    {type: 'html',alue: '<hr style="margin: 0.3rem 0;">',},
                    {to: '/versions',label: '所有版本',},
                    {type: 'html',alue: '<hr style="margin: 0.3rem 0;">',},
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
            {
              href: 'https://github.com/facebook/docusaurus/issues/3526',
              label: '帮助翻译网站',
            },
          ],
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

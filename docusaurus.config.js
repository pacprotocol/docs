/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PAC Protocol',
  tagline: 'All-in-one Documentations',

  url: 'https://docs.pacprotocol.com',
  baseUrl: '/',
  organizationName: 'pacprotocol', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  scripts: [
    {
      src: '/js/fix-location.js',
      async: false,
      defer: false,
    }
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig: {
    navbar: {
      title: 'PAC Protocol Docs',
      logo: {
        alt: 'PAC Protocol Logo',
        src: 'img/logo/PACProtocolIcon.svg',
      },
      items: [
        {
          to: "docs/core",
          docId: 'intro',
          position: 'left',
          label: 'PAC Protocol',
        },
        /*{
          to: "docs/yandna",
          docId: 'intro',
          position: 'left',
          label: 'yanDNA',
        },
        { to: '/blog', label: 'Dev Blog', position: 'left' },
        */
        {
          href: 'https://pacprotocol.com',
          label: 'Website',
          position: 'right',
        },
        {
          href: 'https://github.com/pacprotocol',
          label: 'GitHub',
          position: 'right',
        },
        /*
        {
          type: "localeDropdown",
          position: 'right'
        }
        */
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'PAC Protocol',
              to: '/docs/core',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/3mjWvaYvmj',
            },
            {
              label: "Telegram",
              href: 'https://t.me/Pac_Official'
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/PACGlobalOfficial/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/PACProtocol',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/pacprotocol/',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Website',
              href: 'https://pacprotocol.com',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/pacprotocol',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PAC Global LLC, Inc.`,
    },
    colorMode: {
      defaultMode: 'dark'
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pacprotocol/docs/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/pacprotocol/docs/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

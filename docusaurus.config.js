/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'PAC Protocol',
  tagline: 'All-in-one Documentations',

  url: 'https://docs.pacprotocol.com',
  baseUrl: '/',
  organizationName: 'pacprotocol', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },
  themeConfig: {
    navbar: {
      title: 'PAC Protocol Documentation',
      logo: {
        alt: 'PAC Protocol Logo',
        src: '/img/logo/PACProtocolPrimaryLogo.svg',
        srcDark: '/img/logo/PACProtocolPrimaryLogoWhite.svg',
      },
      items: [
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
              to: '/',
            },
            {
              label: 'Media Kit Download',
              href: 'https://pacprotocol.com/files/pacprotocol-mediakit.zip',
            },
            {
              label: 'Brand Guide',
              href: 'https://pacprotocol.com/pdf/pacprotocol-brand-guide.pdf',
            },
            {
              label: 'Bootstrap Download',
              href: 'https://utils.pacprotocol.com/Bootstrap.tar.gz',
            },
          ],
        },
        {
          title: 'Follow Us',
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
            {
              label: 'TikTok',
              href: 'https://www.tiktok.com/@pacprotocol/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/pac-global-llc/',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UC4RnYztNPllFyDEtv6DB4ww',
            },
          ],
        },
        {
          title: 'Products',
          items: [
            {
              label: 'PACapp',
              href: 'https://pacprotocol.com/network-product/pacapp',
            },
            {
              label: 'yanSAFE',
              href: 'https://pacprotocol.com/network-product/yansafe',
            },
            {
              label: 'PAC Protocol Core',
              href: 'https://github.com/pacprotocol/pacprotocol',
            },
          ],
        },
        {
          title: 'Others',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/pacprotocol',
            },
            {
              label: 'Website',
              href: 'https://pacprotocol.com',
            },
            {
              label: 'Terms & Conditions',
              href: 'https://pacprotocol.com/terms-conditions',
            },
            {
              label: 'Privacy Policy',
              href: 'https://pacprotocol.com/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PAC Global LLC, Inc.`,
    },
    colorMode: {
      defaultMode: 'light'
    },
    prism: {
      theme: require('./src/js/pacprotocol-prism-theme'),
    },
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: "/",
          path: "docs",
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/pacprotocol/docs/edit/master/',
        },
        //blog: {
        //  showReadingTime: true,
        //  // Please change this to your repo.
        //  editUrl:
        //    'https://github.com/pacprotocol/docs/edit/master/website/blog/',
        //},
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};

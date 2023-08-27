// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require("prism-react-renderer/dist");

/** @type {import('@docusaurus/types').Config} */
const config = {
  favicon: "/icons/logo.svg",
  title: "shawne.dev Docs",
  tagline: "Documentation provided for products of shawne.dev",
  url: "https://docs.shawne.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  organizationName: "shawne.dev",
  projectName: "docs",
  trailingSlash: false,

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        sitemap: {
          changefreq: "daily",
          priority: 0.6,
          filename: "sitemap.xml",
        },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateTime: true,
        },
        // blog: {
        //   path: "changelog",
        //   editUrl: ({ locale, blogDirPath, blogPath }) =>
        //     `https://github.com/Shawn-E/docs/edit/main/${blogDirPath}/${blogPath}`,
        //   editLocalizedFiles: false,
        //   blogTitle: "SnailyCAD Changelog",
        //   blogDescription: "SnailyCAD Changelog",
        //   blogSidebarCount: 5,
        //   blogSidebarTitle: "All Versions",
        //   routeBasePath: "changelog",
        //   include: ["**/*.{md,mdx}"],
        //   exclude: [
        //     "**/_*.{js,jsx,ts,tsx,md,mdx}",
        //     "**/_*/**",
        //     "**/*.test.{js,jsx,ts,tsx}",
        //     "**/__tests__/**",
        //   ],
        //   postsPerPage: 10,
        //   rehypePlugins: [],
        //   beforeDefaultRemarkPlugins: [],
        //   beforeDefaultRehypePlugins: [],
        //   truncateMarker: /<!--\s*(truncate)\s*-->/,
        //   showReadingTime: true,
        // },
      }),
    ],
  ],

  plugins: [
    ["@docusaurus/plugin-google-gtag", { trackingID: "G-0NRZS0PMDZ", anonymizeIP: true }],
    ["@docusaurus/plugin-google-tag-manager", { containerId: "GTM-KHZPPK8B" }],
  ],
  themeConfig: {
    algolia: {
      appId: "07W6EBVXOA",
      apiKey: "c80520cd73d4d88eb43623ecf71e8283",
      indexName: "docs",
      contextualSearch: true,
    },
    metadata: [
      { name: "og:image", content: "" },
      { name: "og:image:alt", content: "shawne.dev logo" },
      { name: "og:url", content: "https://docs.shawne.dev" },
      { name: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:image", content: "" },
    ],
    navbar: {
      title: "shawne.dev Docs",
      items: [
        {
          type: "doc",
          docId: "/templates",
          position: "left",
          label: "Documentation",
        },
        {
          position: "right",
          href: "https://link.shawne.dev/d",
          label: "Discord",
        },
        {
          href: "https://link.shawne.dev/gh",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula,
      additionalLanguages: ["lua"],
    },
  },
};

module.exports = config;

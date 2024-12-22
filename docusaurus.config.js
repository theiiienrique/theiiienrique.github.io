// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkDefList from "remark-deflist";
require("dotenv").config();

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Enrique Martinez III",
  tagline: "Technical Writer",
  favicon: "img/favicon.ico",
  staticDirectories: ["public", "static"],

  // Set the production url of your site here
  url: "https://theiiienrique.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "theiiienrique", // Usually your GitHub org/user name.
  projectName: "theiiienrique.github.io", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          showLastUpdateTime: true,
          breadcrumbs: true,
          remarkPlugins: [remarkDefList],
        },
        pages: {
          remarkPlugins: [remarkDefList],
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "G-2WFMMZTEFB",
          anonymizeIP: true,
        },
        googleTagManager: {
          containerId: "GTM-T5D7VXBZ",
        },
      }),
    ],
  ],

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      algolia: {
        appId: "749TA7V8JC",
        apiKey: "228b1afe8e2f2f99875d6a9c4471252d",
        indexName: "theiiienriqueio",
      },
      colorMode: {
        defaultMode: "dark",
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: "Enrique Martinez III",
        items: [
          { to: "/about", label: "About", position: "left" },
          {
            type: "docSidebar",
            sidebarId: "docsSidebar",
            position: "left",
            label: "Docs",
          },
          { to: "/contact", label: "Contact", position: "left" },
          {
            href: "https://www.linkedin.com/in/theiiienrique/",
            position: "right",
            className: "navbar--linkedin-link",
            "aria-label": "LinkedIn profile",
          },
          {
            href: "https://github.com/theiiienrique",
            position: "right",
            className: "navbar--github-link",
            "aria-label": "GitHub profile",
          },
        ],
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      footer: {
        copyright: `Copyright © ${new Date().getFullYear()} Enrique Martinez III. <span class='nowrap'>Built with <a href='https://docusaurus.io/' target='_blank'>Docusaurus</a>.</span>`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.oceanicNext,
      },
      zoom: {
        selector: ".markdown :not(em) > img",
        background: {
          light: "rgba(0, 0, 0, 0.75)",
          dark: "rgba(0, 0, 0, 0.75)",
        },
      },
    }),
};

export default config;

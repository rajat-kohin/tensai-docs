// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Tensai Kit",
  tagline: "Ai Agent Kit",
  // favicon: "img/favicon.ico",
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: "http://localhost:3000/",
  baseUrl: "/",
  organizationName: "tensai", // Usually your GitHub org/user name.
  projectName: "tensai-docs", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
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
          routeBasePath: "/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Tensai Kit",
        // logo: {
        //   alt: "Tensai Logo",
        //   src: "img/logo.svg",
        // },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Explore",
          },
        ],
      },
      footer: {
        style: "dark",
        // logo: {
        //   alt: "tensai logo",
        //   src: "img/logo.png",
        // },
        copyright: `Copyright © ${new Date().getFullYear()} Tensai Kit`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;

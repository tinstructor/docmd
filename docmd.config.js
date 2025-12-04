// docmd.config.js
module.exports = {
  // --- Core Metadata ---
  siteTitle: 'My Documentation',
  siteUrl: '', // e.g. https://mysite.com (Critical for SEO/Sitemap)

  // --- Branding ---
  logo: {
    light: 'assets/images/docmd-logo-dark.png',
    dark: 'assets/images/docmd-logo-light.png',
    alt: 'Logo',
    href: '/',
  },
  favicon: 'assets/favicon.ico',

  // --- Source & Output ---
  srcDir: 'docs',
  outputDir: 'site',

  // --- Layout & UI Architecture (V2) ---
  layout: {
    spa: true, // Enable seamless page transitions (Single Page App behavior)
    header: {
      enabled: true,
    },
    sidebar: {
      collapsible: true,
      defaultCollapsed: false,
    },
    // Centralized Options Menu (Search, Theme, Sponsor)
    optionsMenu: {
      position: 'sidebar-top', // 'header', 'sidebar-top', 'sidebar-bottom'
      components: {
        search: true,      // Enable built-in offline search
        themeSwitch: true, // Enable light/dark toggle
        sponsor: null,     // e.g. 'https://github.com/sponsors/myname'
      }
    },
    // Footer Configuration
    footer: {
      style: 'minimal',    // 'minimal' or 'complete'
      content: '© ' + new Date().getFullYear() + ' My Project. Built with [docmd](https://docmd.io).',
      // For 'complete' style, you can add 'columns': [...] here.
    }
  },

  // --- Theme Settings ---
  theme: {
    name: 'default',        // Options: 'default', 'sky', 'ruby', 'retro'
    defaultMode: 'system',  // 'light', 'dark', or 'system'
    codeHighlight: true,    // Enable Highlight.js
    customCss: [],          // e.g. ['assets/css/custom.css']
  },

  // --- General Features ---
  minify: true,           // Minify HTML/CSS/JS in build
  autoTitleFromH1: true,  // Auto-generate page title from first H1
  copyCode: true,         // Show "copy" button on code blocks
  pageNavigation: true,   // Prev/Next buttons at bottom
  
  customJs: [],           // e.g. ['assets/js/custom.js']

  // --- Navigation (Sidebar) ---
  navigation: [
    { title: 'Introduction', path: '/', icon: 'home' },
    {
      title: 'Guide',
      icon: 'book-open',
      collapsible: false,
      children: [
        { title: 'Getting Started', path: 'https://docs.docmd.io/getting-started/installation', icon: 'rocket', external: true },
        { title: 'Configuration', path: 'https://docs.docmd.io/configuration', icon: 'settings', external: true },
      ],
    },
    { title: 'GitHub', path: 'https://github.com/docmd-io/docmd', icon: 'github', external: true },
  ],

  // --- Plugins ---
  plugins: {
    seo: {
      defaultDescription: 'Documentation built with docmd.',
      openGraph: {
        defaultImage: '',   // e.g. 'assets/images/og-image.png'
      },
      twitter: {
        cardType: 'summary_large_image',
      }
    },
    sitemap: {
      defaultChangefreq: 'weekly',
      defaultPriority: 0.8
    },
    analytics: {
      googleV4: { measurementId: 'G-X9WTDL262N' } // Replace with your GA Measurement ID
    },
    search: {},
    mermaid: {},
    llms: {}
  },
  
  // --- Edit Link ---
  editLink: {
    enabled: false,
    baseUrl: 'https://github.com/USERNAME/REPO/edit/main/docs',
    text: 'Edit this page'
  }
};

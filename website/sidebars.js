/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      label: 'Introduction',
      id: 'intro',
    },
    {
      type: 'doc',
      label: 'Installation',
      id: 'installation',
    },
    {
      type: 'doc',
      label: 'Quick Start',
      id: 'quick-start',
    },
    {
      type: 'doc',
      label: 'Configuration',
      id: 'configuration',
    },
    {
      type: 'category',
      label: 'Tutorials',
      items: ['tutorials/i18next', 'tutorials/react-native'],
    },
    {
      type: 'category',
      label: 'API',
      items: [
        {
          type: 'doc',
          label: 'OtaClient',
          id: 'api/classes/OtaClient',
        }
      ]
    },
    {
      type: 'category',
      label: 'Releases',
      items: ['releases/migration-1'],
    },
  ],
};

module.exports = sidebars;

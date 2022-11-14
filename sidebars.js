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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
  
  tutorialSidebar: [
    { 
      type: 'doc',
      label: 'Start here',
      id: 'readme'
    },
    { 
      type: 'doc',
      label: 'Key concepts',
      id: 'key-concepts'
    },
    {
      type: 'category',
      label: 'Setup guide',
      items: [
        {
          type: 'category',
          label: 'Sources',
          items: [
            'setup-guide/sources/amazon-ads', 
            'setup-guide/sources/amazon-selling-partner', 
            'setup-guide/sources/bigcommerce',
            'setup-guide/sources/mysql',
            'setup-guide/sources/shopify'
          ],  
        },
        {
          type: 'category',
          label: 'Destinations',
          items: ['setup-guide/destinations/mysql'],  
        }    
      ]  
    },
    { 
      type: 'doc',
      label: 'Configurations',
      id: 'configurations'
    },
    { 
      type: 'doc',
      label: 'Sync Log',
      id: 'sync-log'
    },
  ],
};

module.exports = sidebars;

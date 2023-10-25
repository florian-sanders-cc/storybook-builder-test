/** @type { import('@web/storybook-framework-web-components').StorybookConfig } */
const config = {
  stories: ["../src/**/*.stories.js"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@web/storybook-framework-web-components",
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  wdsFinal: (config) => {
    return config;
  },
};
export default config;

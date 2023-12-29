import "../src/global.css";

export const decorators = [
  (Story) => (
    <div style={{ margin: "2rem" }}>
      <Story />
    </div>
  ),
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

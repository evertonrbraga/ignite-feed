import { Avatar } from "../components/Avatar";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Avatar",
  component: Avatar,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
};

export const WithBorder = {
  args: {
    hasBorder: true,
    src: "https://www.github.com/evertonrbraga.png", // Defina o caminho real para sua imagem aqui
    alt: "Alt Text", // Defina o texto alternativo da imagem aqui
  },
};

export const WithoutBorder = {
  args: {
    hasBorder: false,
    src: "https://www.github.com/evertonrbraga.png", // Defina o caminho real para sua imagem aqui
    alt: "Alt Text", // Defina o texto alternativo da imagem aqui
  },
};

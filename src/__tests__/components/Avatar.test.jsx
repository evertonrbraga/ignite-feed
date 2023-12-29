import { render } from "@testing-library/react";
import { Avatar } from "../../components/Avatar";

const data = {
  src: "https://www.github.com/evertonrbraga.png",
  alt: "Everton Braga's photo profile",
};

describe("<Avatar />", () => {
  it("should check if the img is rendered with borders", () => {
    render(<Avatar src={data.src} alt={data.alt} hasBorder />);
  });
  it("should check if the img is rendered without borders", () => {
    render(<Avatar src={data.src} alt={data.alt} />);
  });
});

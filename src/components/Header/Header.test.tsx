import { render, screen } from "@testing-library/react";
import { Header } from "./Header";

beforeEach(() => {
  render(<Header />);
});

describe("<App />", () => {
  it("should display img logo on the screen", () => {
    const svgImg = "test-file-stub";
    const altText = /ignite logo/i;
    const imageElement = screen.getByAltText(altText);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", svgImg);
  });

  it("should display right class on the wrapper tag", () => {
    const header = screen.getByRole("banner");
    expect(header).toHaveClass("header");
  });
});

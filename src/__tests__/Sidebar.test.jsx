import { render } from "@testing-library/react";
import { Sidebar } from "../components/Sidebar";

describe("<Sidebar />", () => {
  it("should verify if the wrapper is rendering correctly", () => {
    render(<Sidebar />);
    const asideElement = document.querySelector(".sidebar");
    expect(asideElement).toBeInTheDocument();
  });

  it("should verify if the image is rendering correctly", () => {
    render(<Sidebar />);
    const divElement = document.querySelector(".profile");
    expect(divElement).toBeInTheDocument();
  });

  it("should display the right texts on profile", () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText("Everton Braga")).toBeInTheDocument();
    expect(getByText("Web Developer")).toBeInTheDocument();
  });

  it("should verify if the footer and its contents is rendering correctly", () => {
    const { container, getByText } = render(<Sidebar />);
    const footerElement = container.querySelector("footer");
    const linkElement = getByText("Editar seu perfil");
    expect(footerElement).toBeInTheDocument();
    expect(linkElement).toBeInTheDocument();
  });
});

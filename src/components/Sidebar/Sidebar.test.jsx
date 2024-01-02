import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";

describe("<Sidebar />", () => {
  it("should verify if the .sidebar wrapper is rendering correctly", () => {
    render(<Sidebar />);
    const sidebarWrapper = document.querySelector(".sidebar");
    expect(sidebarWrapper).toBeInTheDocument();
  });

  it("should verify if the images are rendering correctly", () => {
    render(<Sidebar />);
    const coverImage = document.querySelector(".cover");
    const avatarImage = screen.getByAltText(
      "Everton Braga's photo profile in the sidebar"
    );
    expect(coverImage).toBeInTheDocument();
    expect(avatarImage).toBeInTheDocument();
  });

  it("should display the right texts on profile", () => {
    const { getByText } = render(<Sidebar />);
    expect(getByText("Everton Braga")).toBeInTheDocument();
    expect(getByText("Web Developer")).toBeInTheDocument();
  });

  it("should verify if the footer and its contents is rendering correctly", () => {
    const { container, getByText, getByLabelText } = render(<Sidebar />);
    const footerElement = container.querySelector("footer");
    const icon = getByLabelText("icone-lapis");
    const button = getByText("Editar seu perfil");
    expect(footerElement).toBeInTheDocument();
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});

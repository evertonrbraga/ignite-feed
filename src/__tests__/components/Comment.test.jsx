import { render, screen, fireEvent } from "@testing-library/react";
import { Comment } from "../../components/Comment";

beforeEach(() => {
  render(<Comment />);
});

describe("<Comment />", () => {
  it("should check if the image renders correctly", () => {
    const img = screen.getByAltText("Foto avatar");
    const url = "https://avatars.githubusercontent.com/u/25904662?v=4";
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", url);
  });

  it("should check if the time renders correctly", () => {
    const title = "11 de Maio às 08:13h";
    const dateTime = "2022-05-11 08:13:30";
    const timeElement = screen.getByTitle(title);
    expect(timeElement).toHaveAttribute("title", title);
    expect(timeElement).toHaveAttribute("dateTime", dateTime);
    expect(timeElement).toHaveTextContent("Cerca de 1h atrás");
  });

  it("should check if delete functionality is working properly", () => {
    const button = screen.getByTitle("Deletar comentário");
    const trashIcon = screen.getByLabelText("trash-icon");
    expect(button).toBeInTheDocument();
    expect(trashIcon).toBeInTheDocument();
  });

  it("should check if the comment is being displayed on the screen", () => {
    const comment = screen.getByText(/muito bom devon/i);
    expect(comment).toBeInTheDocument();
  });

  it("should check if the thumbs up functionality is working properly", () => {
    const button = screen.getByText("Aplaudir");
    const thumbsupIcon = screen.getByLabelText("thumbsup-icon");
    expect(button).toHaveTextContent("Aplaudir");
    expect(button).toHaveTextContent("20");
    expect(thumbsupIcon).toBeInTheDocument();
  });
});

import { render, screen, fireEvent } from "@testing-library/react";
import { Comment } from "./Comment";

describe("<Comment />", () => {
  const onDeleteComment = jest.fn();

  beforeEach(() => {
    render(<Comment content="comment" onDeleteComment={onDeleteComment} />);
  });

  it("should check if the image renders correctly", () => {
    const img = screen.getByAltText(
      "Everton Braga's photo profile in the comment"
    );
    const url = "https://www.github.com/evertonrbraga.png";
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

  it("should check if the click on trash icon calls the function", () => {
    const button = screen.getByTitle("Deletar comentário");
    const trashIcon = screen.getByLabelText("trash-icon");
    expect(button).toBeInTheDocument();
    expect(trashIcon).toBeInTheDocument();
    fireEvent.click(button);
    expect(onDeleteComment).toHaveBeenCalledWith("comment");
  });

  it("should check if the comment is being displayed on the screen", () => {
    const comment = screen.getByText("comment");
    expect(comment).toBeInTheDocument();
  });

  it("should check if the like feature is working properly", () => {
    const button = screen.getByText("Aplaudir");
    const thumbsupIcon = screen.getByLabelText("thumbsup-icon");
    expect(button).toHaveTextContent("Aplaudir");
    expect(button).toHaveTextContent("0");
    expect(thumbsupIcon).toBeInTheDocument();
    fireEvent.click(button);
    expect(button).toHaveTextContent("1");
  });
});

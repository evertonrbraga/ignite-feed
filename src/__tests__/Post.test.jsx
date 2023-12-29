import { render, screen, fireEvent } from "@testing-library/react";
import { Post } from "../components/Post";

beforeEach(() => {
  render(<Post />);
});

describe("<Post />", () => {
  it("should verify if the .post wrapper are rendering", () => {
    const postWrapper = document.querySelector(".post");
    expect(postWrapper).toBeInTheDocument();
  });
  it("should verify if the avatar image is rendering", () => {
    const avatarImg = screen.getByAltText("imagem-avatar");
    expect(avatarImg).toBeInTheDocument();
  });
  it("should verify the authorInfo section", () => {
    const author = screen.getByText("Everton Braga");
    const role = screen.getByText("Web Developer");
    expect(author).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
  it("should verify the post time", () => {
    const postTime = screen.getByText("Publicado há 1h");
    expect(postTime).toBeInTheDocument();
  });
  it("should verify the post content", () => {
    const firstParagraph = screen.getByText("Fala galeraa 👋");
    const secondParagraph = screen.getByText(
      "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
    );
    const thirdParagraph = screen.getByText(/jane.design\/doctorcare/i);
    const fourthParagraphFirstAnchor = screen.getByText("#novoprojeto");
    const fourthParagraphSecondAnchor = screen.getByText("#nlw");
    const fourthParagraphThirdAnchor = screen.getByText("#rocketseat");
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
    expect(thirdParagraph).toBeInTheDocument();
    expect(fourthParagraphFirstAnchor).toBeInTheDocument();
    expect(fourthParagraphSecondAnchor).toBeInTheDocument();
    expect(fourthParagraphThirdAnchor).toBeInTheDocument();
  });
  it("should verify the commentForm section", () => {
    const label = screen.getByText("Deixe seu feedback");
    expect(label).toBeInTheDocument();

    const textarea = screen.getByPlaceholderText("Deixe um comentário");
    expect(textarea).toHaveValue("");
    fireEvent.change(textarea, { target: { value: "Some text" } });
    expect(textarea).toHaveValue("Some text");

    const buttonBeforeFocus = screen.queryByText("Publicar");
    expect(buttonBeforeFocus).toBeNull();
    fireEvent.focus(textarea);
    const buttonAfterFocus = screen.getByText("Publicar");
    expect(buttonAfterFocus).toBeInTheDocument();
    fireEvent.blur(textarea);
    expect(buttonBeforeFocus).toBeNull();
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Post, PostType } from "./Post";
import * as util from "../../utils/utils";

const post: PostType = {
  id: 1,
  author: {
    avatarUrl: "https://www.github.com/evertonrbraga.png",
    name: "Everton Braga",
    role: "Frontend Developer",
  },
  content: [
    { type: "paragraph", content: "Fala galeraa 👋" },
    {
      type: "paragraph",
      content:
        "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
    },
    { type: "link", content: "jane.design/doctorcare" },
  ],
  publishedAt: new Date("2023-12-29 20:00:00"),
};

beforeEach(() => {
  render(<Post post={post} />);
});

describe("<Post />", () => {
  it("should check if the .post main wrapper are rendering", () => {
    const postWrapper = document.querySelector(".post");
    expect(postWrapper).toBeInTheDocument();
  });

  it("should check if the avatar image is rendering", () => {
    const avatarImg = screen.getByAltText(
      "Everton Braga's photo profile in the post"
    );
    expect(avatarImg).toBeInTheDocument();
  });

  it("should check if the authorInfo section is displayed on the screen", () => {
    const author = screen.getByText("Everton Braga");
    const role = screen.getByText("Frontend Developer");
    expect(author).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });

  it("should check the post time", () => {
    const publishedDateFormatted = util.publishedDateFormatted(
      post.publishedAt
    );
    const publishedDateRelativeToNow = util.publishedDateRelativeToNow(
      post.publishedAt
    );
    const timeTag = screen.getByTitle(publishedDateFormatted);
    const dateTime = post.publishedAt.toISOString();
    expect(timeTag).toHaveAttribute("title", publishedDateFormatted);
    expect(timeTag).toHaveAttribute("dateTime", dateTime);
    expect(timeTag).toHaveTextContent(publishedDateRelativeToNow);
  });

  it("should check the content section", () => {
    const firstParagraph = screen.getByText("Fala galeraa 👋");
    const secondParagraph = screen.getByText(
      "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
    );
    const linkText = /jane.design\/doctorcare/i;
    const linkElement = screen.getByRole("link", { name: linkText });
    expect(firstParagraph).toBeInTheDocument();
    expect(secondParagraph).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "#");
    expect(linkElement).toHaveTextContent(linkText);
  });

  it("should check the commentForm section with the logic of button visibility", async () => {
    const label = screen.getByText("Deixe seu feedback");
    expect(label).toBeInTheDocument();
    const footerButtonSection = screen.getByLabelText("botao-publicar");
    expect(footerButtonSection).toBeEmptyDOMElement();
    const textarea = screen.getByPlaceholderText("Deixe um comentário");
    fireEvent.focus(textarea);
    expect(textarea).toHaveValue("");
    fireEvent.change(textarea, { target: { value: "Some text" } });
    expect(textarea).toHaveValue("Some text");
    expect(footerButtonSection).not.toBeEmptyDOMElement();
    fireEvent.blur(textarea);
    await waitFor(
      () => {
        expect(footerButtonSection).toBeEmptyDOMElement();
      },
      { timeout: 150 }
    );
  });

  it("should check if the form submit creates a new comment", () => {
    const textarea = screen.getByPlaceholderText("Deixe um comentário");
    const comments = screen.getAllByLabelText("comment");
    expect(comments).toHaveLength(1);
    fireEvent.focus(textarea);
    const button = screen.getByText("Publicar");
    fireEvent.change(textarea, { target: { value: "New comment" } });
    fireEvent.click(button);
    expect(textarea).toHaveValue("");
    const updatedComments = screen.getAllByLabelText("comment");
    expect(updatedComments).toHaveLength(2);
  });

  it("should check if delete comment feature is working properly", async () => {
    const commentList = screen.getByLabelText("comment-list");
    const button = screen.getAllByTitle("Deletar comentário")[0];
    expect(commentList).not.toBeEmptyDOMElement();
    expect(button).toBeInTheDocument();
    fireEvent.click(button);
    expect(commentList).toBeEmptyDOMElement();
  });

  it("should check if the publish button click is disabled if textarea content is empty", () => {
    const textarea = screen.getByPlaceholderText("Deixe um comentário");
    fireEvent.focus(textarea);
    const button = screen.getByText("Publicar");
    expect(button).toBeDisabled();
  });
});

import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { render, screen, fireEvent } from "@testing-library/react";
import { Post } from "./Post";

const data = {
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
  render(
    <Post
      author={data.author}
      content={data.content}
      publishedAt={data.publishedAt}
    />
  );
});

describe("<Post />", () => {
  it("should verify if the .post wrapper are rendering", () => {
    const postWrapper = document.querySelector(".post");
    expect(postWrapper).toBeInTheDocument();
  });
  it("should verify if the avatar image is rendering", () => {
    const avatarImg = screen.getByAltText(
      "Everton Braga's photo profile in the post"
    );
    expect(avatarImg).toBeInTheDocument();
  });
  it("should verify the authorInfo section", () => {
    const author = screen.getByText("Everton Braga");
    const role = screen.getByText("Frontend Developer");
    expect(author).toBeInTheDocument();
    expect(role).toBeInTheDocument();
  });
  it("should verify the post time", () => {
    const formattedDate = format(
      data.publishedAt,
      "d 'de' MMMM 'às' HH:mm'h'",
      {
        locale: ptBR,
      }
    );
    expect(formattedDate).toBe("29 de dezembro às 20:00h");
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

import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    const publishedDateFormatted = format(
      data.publishedAt,
      "d 'de' MMMM 'às' HH:mm'h'",
      {
        locale: ptBR,
      }
    );
    const publishedDateRelativeToNow = formatDistanceToNow(data.publishedAt, {
      locale: ptBR,
      addSuffix: true,
    });
    const timeTag = screen.getByTitle(publishedDateFormatted);
    const dateTime = data.publishedAt.toISOString();
    expect(timeTag).toHaveAttribute("title", publishedDateFormatted);
    expect(timeTag).toHaveAttribute("dateTime", dateTime);
    expect(timeTag).toHaveTextContent(publishedDateRelativeToNow);
  });
  it("should verify the post content", () => {
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
  it("should verify the commentForm section", async () => {
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
});

//testar funcao de submit do form

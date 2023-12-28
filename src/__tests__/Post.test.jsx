import { render } from "@testing-library/react";
import { Post } from "../Post";

describe("<Post />", () => {
  it("should display elements on the screen", () => {
    const author = "Everton";
    const content = "Updating myself";

    const { getByText } = render(<Post author={author} content={content} />);

    const authorElement = getByText(author);
    const contentElement = getByText(content);

    expect(authorElement).toBeInTheDocument();
    expect(contentElement).toBeInTheDocument();
  });
});

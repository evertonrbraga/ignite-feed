import { render } from "@testing-library/react";
import { App } from "../App";

describe("<App />", () => {
  it("should display elements on the screen", () => {
    const { getByText } = render(<App />);

    expect(getByText("Everton")).toBeInTheDocument();
    expect(getByText("Updating myself")).toBeInTheDocument();
    expect(getByText("Paula")).toBeInTheDocument();
    expect(getByText("Loving")).toBeInTheDocument();
  });
});

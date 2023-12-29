import { render } from "@testing-library/react";
import { App } from "../App";

describe("<App />", () => {
  it("should verify if the wrapper class is rendering correctly", () => {
    render(<App />);
    const wrapper = document.querySelector(".wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});

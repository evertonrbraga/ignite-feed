import { dateFormatter } from "./utils";

describe("utils", () => {
  it("dateFormatter function", () => {
    const date = new Date("2023-12-31 20:00:00");
    const formattedDate = dateFormatter(date);
    expect(formattedDate).toBe("31 de dezembro às 20:00");
  });
});

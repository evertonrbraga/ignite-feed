const util = require("./utils");

describe("utils", () => {
  it("publishedDateFormatted function", () => {
    const date = new Date("2023-12-31 20:00:00");
    const publishedDateFormatted = util.publishedDateFormatted(date);
    expect(publishedDateFormatted).toBe("31 de dezembro às 20:00h");
  });

  it("publishedDateRelativeToNow function", () => {
    const date = new Date();
    const publishedDateRelativeToNow = util.publishedDateRelativeToNow(date);
    expect(publishedDateRelativeToNow).toBe("há menos de um minuto");
  });
});

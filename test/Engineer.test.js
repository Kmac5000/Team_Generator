const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("generates employee github", () => {
    const engineer = new Engineer("Keith", 45, "riverbatrock@gmail", Kmac5000);

    expect(engineer.empGithub()).toEqual(
      expect.stringContaining(engineer.github.toString)
    );
  });
});

const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("gets type of employee", () => {
    const intern = new Intern("Keith", 45, "riverbatrock@gmail", "DU");

    expect(intern.empType()).toEqual(expect.any(String));
  });
});

describe("Intern", () => {
  it("generates employee school", () => {
    const intern = new Intern("Keith", 45, "riverbatrock@gmail", "DU");

    expect(intern.empSchool()).toEqual(expect.any(String));
  });
});

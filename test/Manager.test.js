const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("creates a Manager object", () => {
    const manager = new Manager("Keith", 45, "riverbatrock@gmail", 23);

    expect(manager.officeNumber).toEqual(expect.any(Number));
  });
});

describe("Manager", () => {
  it("gets employee Type", () => {
    const manager = new Manager("Keith", 45, "riverbatrock@gmail", 23);

    expect(manager.empType()).toEqual("Manager");
  });
});

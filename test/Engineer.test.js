const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  it("generates employee name, id, email, github ", () => {
    const engineer = new Engineer(
      "Keith",
      45,
      "riverbatrock@gmail",
      "Kmac5000",
      "Engineer"
    );

    expect(typeof engineer.name).toBe("string");
    expect(typeof engineer.id).toBe("number");
    expect(typeof engineer.email).toBe("string");
    expect(typeof engineer.github).toBe("string");
  });
  it("should get employee name, id, email, github, role", () => {
    const engineer = new Engineer(
      "Keith",
      45,
      "riverbatrock@gmail",
      "Kmac5000",
      "Engineer"
    );
    const { name, id, email, github } = engineer;

    expect(engineer.empName()).toBe(name);
    expect(engineer.empId()).toBe(id);
    expect(engineer.empEmail()).toBe(email);
    expect(engineer.empGithub()).toBe(github);
    expect(engineer.empType()).toBe("Engineer");
  });
});

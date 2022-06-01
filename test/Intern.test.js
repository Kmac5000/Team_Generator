const Intern = require("../lib/Intern");

describe("Intern", () => {
  it("generates employee name, id, email, school ", () => {
    const intern = new Intern(
      "Keith",
      45,
      "riverbatrock@gmail",
      "Kmac5000",
      "Engineer"
    );

    expect(typeof intern.name).toBe("string");
    expect(typeof intern.id).toBe("number");
    expect(typeof intern.email).toBe("string");
    expect(typeof intern.school).toBe("string");
  });
  it("should get employee name, id, email, school, role", () => {
    const intern = new Intern(
      "Keith",
      45,
      "riverbatrock@gmail",
      "Kmac5000",
      "Intern"
    );
    const { name, id, email, school } = intern;

    expect(intern.empName()).toBe(name);
    expect(intern.empId()).toBe(id);
    expect(intern.empEmail()).toBe(email);
    expect(intern.empSchool()).toBe(school);
    expect(intern.empType()).toBe("Intern");
  });
});

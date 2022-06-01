const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("generates employee name, id, email, office ", () => {
    const manager = new Manager("Keith", 45, "riverbatrock@gmail", 12);

    expect(typeof manager.name).toBe("string");
    expect(typeof manager.id).toBe("number");
    expect(typeof manager.email).toBe("string");
    expect(typeof manager.office).toBe("number");
  });
  it("should get employee name, id, email, office, role", () => {
    const manager = new Manager("Keith", 45, "riverbatrock@gmail", 12);
    const { name, id, email, office } = manager;

    expect(manager.empName()).toBe(name);
    expect(manager.empId()).toBe(id);
    expect(manager.empEmail()).toBe(email);
    expect(manager.empOffice()).toBe(office);
    expect(manager.empType()).toBe("Manager");
  });
});

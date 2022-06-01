const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("generates employee name, id, email", () => {
    const employee = new Employee("Keith", 45, "riverbatrock@gmail");

    expect(typeof employee.name).toBe("string");
    expect(typeof employee.id).toBe("number");
    expect(typeof employee.email).toBe("string");
  });
  it("should get employee name, id, email", () => {
    const employee = new Employee("Keith", 45, "riverbatrock@gmail");
    const { name, id, email } = employee;

    expect(employee.empName()).toBe(name);
    expect(employee.empId()).toBe(id);
    expect(employee.empEmail()).toBe(email);
  });
});

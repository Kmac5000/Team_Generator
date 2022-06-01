const Employee = require("../lib/Employee");

describe("Employee", () => {
  it("generates employee name", () => {
    const employee = new Employee("Keith", 45, "riverbatrock@gmail");

    expect(employee.empName()).toEqual(expect.any(String));
  });
});

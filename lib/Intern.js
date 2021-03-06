const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  empSchool() {
    return this.school;
  }

  empType() {
    return "Intern";
  }
}

module.exports = Intern;

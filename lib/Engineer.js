const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.employeeType = "Engineer";
  }

  empGithub() {
    return this.github;
  }

  empType() {
    return "Engineer";
  }
}

module.exports = Engineer;

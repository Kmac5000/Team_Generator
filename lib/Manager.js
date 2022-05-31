const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, office) {
    // calling employee constructor
    super(name, id, email);
    this.officeNumber = office;
  }
  empType() {
    return "Manager";
  }
}
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  empGithub() {
    return this.github;
  }

  empType() {
    return "Engineer";
  }
}

module.exports = Manager;

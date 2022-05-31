const inquirer = require("inquirer");
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

module.exports = Manager;

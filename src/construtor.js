const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");
const fs = require("fs");

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  empName() {
    return this.name;
  }

  empId() {
    return this.id;
  }

  empEmail() {
    return this.email;
  }
}

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

module.exports = { Employee, Engineer, Intern, Manager };

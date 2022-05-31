const inquirer = require("inquirer");
const Choices = require("inquirer/lib/objects/choices");

const teamMembers = [];

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

class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // calling employee constructor
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  // override employee role to manager
  empType() {
    return "Manager";
  }
}

const employeeChoice = () => {
  return inquirer
    .prompt([
      {
        type: "list",
        message: "What type of employee would you like to add?",
        name: "employeeType",
        choices: ["Engineer", "Intern"],
      },
      {
        type: "input",
        meassge: "What is the Employee name?",
        name: "name",
      },
      {
        type: "input",
        meassge: "What is the Employee ID?",
        name: "id",
      },
      {
        type: "input",
        meassge: "What is the Employee email?",
        name: "email",
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: "input",
        meassge: "What is the Employee Github id?",
        name: "github",
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: "input",
        meassge: "What school does your intern attend?",
        name: "school",
        when: (input) => input.employeeType === "Intern",
      },
      {
        type: "confirm",
        message: "Do you have more employees?",
        name: "moreEmployees",
        default: false,
      },
    ])
    .then((employeeInfo) => {
      let { employeeType, name, id, email, github, school, moreEmployees } =
        employeeInfo;
      let employee;

      if (employeeType === "Engineer") {
        employee = new Engineer(name, id, email, github);
        console.log(employee);
      } else {
        employee = new Intern(name, id, school);
        console.log(employee);
      }

      if (moreEmployees) {
        return employeeChoice(teamMembers);
      } else {
        return teamMembers;
      }
    });
};

(module.exports = employeeChoice), Employee, Engineer, Intern, Manager;

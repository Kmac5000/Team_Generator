const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
// const generateHTML = require("./src/constructHTML");
const { genInt, genEng, genMan } = require("./src/genCards");

let teamMembers = [];

const manChoice = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Who is the manager?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the manager ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the manager email?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the manager office number?",
        name: "office",
      },
    ])
    .then((manInfo) => {
      const { name, id, email, office } = manInfo;
      const manager = new Manager(name, id, email, office);
      teamMembers.push(manager);
      // console.log(manager);

      employeeChoice(teamMembers);
      console.log(teamMembers);
    });
};

const employeeChoice = (teamMembers) => {
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
        message: "What is the Employee name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the Employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the Employee email?",
        name: "email",
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: "input",
        message: "What is the Employee Github id?",
        name: "github",
        when: (input) => input.employeeType === "Engineer",
      },
      {
        type: "input",
        message: "What school does your intern attend?",
        name: "school",
        when: (input) => input.employeeType === "Intern",
      },
      {
        type: "confirm",
        message: "Do you have more employees to add? Yes or No",
        name: "moreEmployees",
      },
    ])
    .then((employeeInfo) => {
      let { employeeType, name, id, email, github, school, moreEmployees } =
        employeeInfo;

      if (employeeType === "Engineer") {
        let engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        console.log(engineer);
      } else {
        let intern = new Intern(name, id, school);
        teamMembers.push(intern);
        console.log(intern);
      }

      if (moreEmployees) {
        return employeeChoice(teamMembers);
      } else {
        return teamMembers;
      }
    });
};

const generateHTML = () => {
  // array for cards
  console.log("this the: ", teamMembers);
  // cardArray = [];

  for (let i = 0; i < data.length; i++) {
    let employee = teamMembers[i];
    let type = employee.empType();

    //manager function
    if (type === "Manager") {
      const manCard = genMan(employee);

      cardArray.push(manCard);
    }

    //engineer function
    if (type === "Engineer") {
      let engCard = genEng(employee);

      cardArray.push(engCard);
    }

    //intern function
    if (type === "Intern") {
      let intCard = genInt(employee);

      cardArray.push(intCard);
    }
  }

  const empCards = cardArray.join("");

  const genTeam = JSON.stringify(generatePage(empCards));
  return genTeam;
};

const writeFile = (data) => {
  fs.writeFile("./dist/index.html", generateHTML(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log(
        "Your team profile has been successfully created! Please check out the index.html"
      );
    }
  });
};

manChoice()
  .then((teamMembers) => {
    return generateHTML(teamMembers);
  })
  .then((generateHTML) => {
    return writeFile(generateHTML);
  })
  .catch((err) => {
    console.log(err);
  });

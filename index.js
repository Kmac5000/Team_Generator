const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generatePage = require("./src/constructHTML");
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

      return employeeChoice();
    });
};

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
      console.log("this is the", employeeInfo);
      let { employeeType, name, id, email, github, school, moreEmployees } =
        employeeInfo;

      if (employeeType === "Engineer") {
        const engineer = new Engineer(name, id, email, github);
        teamMembers.push(engineer);
        // console.log(engineer);
      }
      if (employeeType === "Intern") {
        const intern = new Intern(name, id, school);
        teamMembers.push(intern);
        // console.log(intern);
      }

      if (moreEmployees) {
        return employeeChoice();
      } else {
        return teamMembers;
      }
    });

  // .then(() => {
  //   const htmlPageContent = generatePage(answers);

  //   fs.writeFile("index.html", htmlPageContent, (err) =>
  //     err ? console.log(err) : console.log("Successfully created index.html!")
  //   );
  // });
};

console.log("this is the team", teamMembers);
const generateHTML = (teamMembers) => {
  // array for cards
  // console.log("this the: ", teamMembers);
  let cardArray = [];

  for (let i = 0; i < teamMembers.length; i++) {
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

  const genTeam = generatePage(empCards);
  console.log("genteam =" + genTeam);
  console.log("these cards:" + empCards);
  return genTeam;
};

const writeFile = () => {
  const finalHtml = generateHTML(teamMembers);
  fs.writeFile("./dist/index.html", finalHtml, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Your team profile has been successfully created");
    }
  });
};

manChoice().then(() => {
  console.log(`Final check of team members: ${teamMembers}`);
  writeFile();
});
// .then((generateHTML) => {
//   return writeFile(generateHTML);
// });
// .catch((err) => {
//   console.log(err);
// })

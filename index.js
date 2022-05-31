const inquirer = require("inquirer");
const fs = require("fs");
const constructor = require("./src/construtor");
const employeeChoice = require("./src/construtor");
const manChoice = require("./src/construtor");
const writeFile = require("./src/construtor");

manChoice().then(employeeChoice).then(writeFile);

// (module.exports = employeeChoice),
//   manChoice,
//   Employee,
//   Engineer,
//   Intern,
//   Manager,
//  writeFile;

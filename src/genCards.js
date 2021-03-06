// <!-- manager -->
const genMan = (manager) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${manager.name}<br /><span class="title">&#128302;Manager</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${manager.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
    <li class="list-group-item office">Office Number: ${manager.office}</li>
  </ul>
</div>`;
};

// Engineer
const genEng = (engineer) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${engineer.name}<br /><span class="title">&#9937;Engineer</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${engineer.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
    <li class="list-group-item office">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
  </ul>
</div>`;
};

// Intern
const genInt = (intern) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${intern.name}<br /><span class="title">&#10084;Intern</span></div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${intern.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
    <li class="list-group-item office">School: ${intern.school}</li>
  </ul>
</div>`;
};

module.exports = { genInt, genEng, genMan };

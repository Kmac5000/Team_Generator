// <!-- manager -->
const genMan = (data) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${data.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${data.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${data.email}">${data.email}</a></li>
    <li class="list-group-item office">Office Number: ${data.office}</li>
  </ul>
</div>`;
};

// Engineer
const genEng = (data) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${data.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${data.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${data.email}">${data.email}</a></li>
    <li class="list-group-item office">Github: ${data.github}</li>
  </ul>
</div>`;
};

// Intern
const genInt = (data) => {
  return `
<div class="card" style="width: 18rem">
  <div class="card-header">${data.name}</div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item id">ID: ${data.id}</li>
    <li class="list-group-item email">Email: <a href="mailto:${data.email}">${data.email}</a></li>
    <li class="list-group-item office">School: ${data.office}</li>
  </ul>
</div>`;
};

module.exports = { genInt, genEng, genMan };

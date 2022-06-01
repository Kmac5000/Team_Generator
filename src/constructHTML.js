const { genInt, genEng, genMan } = require("./genCards");

// const generateHTML = (teamMembers) => {
//   // array for cards
//   console.log("this the: ", teamMembers);
//   cardArray = [];

//   for (let i = 0; i < teamMembers.length; i++) {
//     let employee = teamMembers[i];
//     let type = employee.empType();

//     //manager function
//     if (type === "Manager") {
//       const manCard = genMan(employee);

//       cardArray.push(manCard);
//     }

//     //engineer function
//     if (type === "Engineer") {
//       let engCard = genEng(employee);

//       cardArray.push(engCard);
//     }

//     //intern function
//     if (type === "Intern") {
//       let intCard = genInt(employee);

//       cardArray.push(intCard);
//     }
//   }

//   //   const empCards = cardArray.join("");

//   const genTeam = JSON.stringify(generatePage(empCards));
//   return genTeam;
// };

const generatePage = (empCards) => {
  `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Build A Team</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
      crossorigin="anonymous"
    />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Creepster&family=Gloria+Hallelujah&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./src/style.css" />
  </head>
  <body>
    <header>
      <nav class="navbar navbar-light bg-dark justify-content-center display-1">
        <span class="navbar-text text-light">Build A Team</span>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center" id="team-cards">
          ${empCards}
        </div>
      </div>
    </main>
  </body>
  <script
    src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js"
    integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  ></script>
  <script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"
  ></script>
</html>`;
};

// module.exports = generateHTML;

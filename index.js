// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./src/generatePage");

//team
const Manager = require("./lib/Manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/Intern");
const mainMenu = () => {
  inquirer
    .prompt({
      type: "list",
      name: "task",
      message: "select employee",
      choices: ["manager", "engineer", "intern", "done"],
    })
    .then((answer) => {
      if (answer.task === "manager") {
        askManager();
      }
      if (answer.task === "engineer") {
        askEngineer();
      }
      if (answer.task === "intern") {
        askIntern();
      }
      if (answer.task === "done") {
        console.log(employees)
        writeFile(generatePage(employees))
      }
    });
};
const employees = [];

const askManager = () => {
  inquirer.prompt([
    { type: "input", name: "name", message: "enter employee name" },
    { type: "input", name: "id", message: "enter employee id" },
    { type: "input", name: "email", message: "enter employee email" },
    { type: "input", name: "officeNumber", message: "enter employee office number" },
  ])
  .then(answers => {
    const manager = new Manager(answers.name, answers.id, answers.email,answers.officeNumber)
    employees.push(manager)
    mainMenu()
  })
};
const askEngineer = () => {
    inquirer.prompt([
      { type: "input", name: "name", message: "enter employee name" },
      { type: "input", name: "id", message: "enter employee id" },
      { type: "input", name: "email", message: "enter employee email" },
      { type: "input", name: "gitHub", message: "enter employee github" },
    ])
    .then(answers => {
        const engineer = new Engineer(answers.name, answers.id, answers.email,answers.gitHub)
        employees.push(engineer)
        mainMenu()
      })
  };
  const askIntern = () => {
    inquirer.prompt([
      { type: "input", name: "name", message: "enter employee name" },
      { type: "input", name: "id", message: "enter employee id" },
      { type: "input", name: "email", message: "enter employee email" },
      { type: "input", name: "school", message: "enter employee school" },
    ])
    .then(answers => {
        const intern = new Intern(answers.name, answers.id, answers.email,answers.school)
        employees.push(intern)
        mainMenu()
      })
  };

  mainMenu()

const writeFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', data, err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

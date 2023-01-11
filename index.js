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
      choices: ["Manager", "Engineer", "Intern", "Done"],
    })
    .then((answer) => {
      if (answer.task === "Manager") {
        askManager();
      }
      if (answer.task === "Engineer") {
        askEngineer();
      }
      if (answer.task === "Intern") {
        askIntern();
      }
      if (answer.task === "Done") {
        console.log(employees)
        writeFileSync(generatePage(employees))
      }
    });
};
const employees = [];
// Manager questions and answers
const askManager = () => {
  inquirer.prompt([
    { type: "input", name: "name", message: "Enter manager name" },
    { type: "input", name: "id", message: "Enter employee id" },
    { type: "input", name: "email", message: "Enter employee email" },
    { type: "input", name: "officeNumber", message: "Enter employee office number" },
  ])
  .then(answers => {
    const manager = new Manager(
            answers.name, 
            answers.id, 
            answers.email,
            answers.officeNumber)
    employees.push(manager)
    mainMenu()
  })
};
// Engineer questions and answers
const askEngineer = () => {
    inquirer.prompt([
      { type: "input", name: "name", message: "Enter engineer name" },
      { type: "input", name: "id", message: "Enter employee id" },
      { type: "input", name: "email", message: "Enter employee email" },
      { type: "input", name: "gitHub", message: "Enter employee github" },
    ])
    .then(answers => {
        const engineer = new Engineer(
             answers.name,
             answers.id, 
             answers.email,
             answers.gitHub)
        employees.push(engineer)
        mainMenu()
      })
  };
  // Intern questions and answers
  const askIntern = () => {
    inquirer.prompt([
      { type: "input", name: "name", message: "Enter engineer name" },
      { type: "input", name: "id", message: "Enter employee id" },
      { type: "input", name: "email", message: "Enter employee email" },
      { type: "input", name: "school", message: "Enter employee school" },
    ])
    .then(answers => {
        const intern = new Intern(
            answers.name, 
            answers.id, 
            answers.email,
            answers.school)
        employees.push(intern)
        mainMenu()
      })
  };

  mainMenu()
// generate html
const writeFileSync = (data) => {
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



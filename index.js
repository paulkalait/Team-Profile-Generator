//where prompt goes
const fs = require('fs')
const inquirer = require('inquirer')

const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')

const generateHtml = require('./utils/generatehtml')


const teamStaff = []

const managerQuestions = [{

    type: "input",
    name: "ID Number",
    message: "what is your ID Number?"
},
{
    type: "input",
    name: "Name",
    message: "what is your name?"
},
{
    type:"input",
    name: "Email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "Office",
    message: "what is your office number?"
}
]

const EmployeeQuestions = [{

    type: "input",
    name: "ID Number",
    message: "what is your ID Number?"
},
{   
    type: "list",
    name: "Role",
    message: "what is your office number?",
    choices: ['Intern', 'Engineer']
},
{
    type: "input",
    name: "Name",
    message: "what is your name?"
},
{
    type:"input",
    name: "Email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "Office",
    message: "what is your office number?"
}
]




const addMoreEmployees = () => {
    inquirer.prompt([
        {
            type: "list",
            name: "options",
            message: "would you like to add more employees",
            choices: ["Engineer", "intern", "none"]
        }
    ])
    .then(answers => { 
        if(answers.options == "Engineer"){

            engineerQuestions();
        } else if(answers.options == "Intern"){
            InternQuestions()
        }else{
            renderFunction()
        }
    
})

function renderHtml() {
    fs.writeFileSync("dist/generatedPage.html", generateMarkdown(teamStaff))
}


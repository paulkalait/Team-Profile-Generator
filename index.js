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
    name: "id",
    message: "what is your ID Number?"
},
{
    type: "input",
    name: "name",
    message: "what is your name?"
},
{
    type:"input",
    name: "email",
    message: "What is your email address?"
},
{
    type: "input",
    name: "officeNumber",
    message: "what is your office number?"
}
]
.then(managerAnswers => {
    const {name, id, email, officeNumber} = managerAnswers
    const manager = new Manager (name, id, email, officeNumber)

    teamStaff.push(manager)
})

//questions for 
const employeeQuestions = [{

    type: "input",
    name: "id",
    message: "what is your ID Number?"
},
{   
    type: "list",
    name: "role",
    message: "what is your position",
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
]
.then(employeeAnswers => {
    const {name, id, email, role} = employeeAnswers
    const employee = new Employee (name, id, email, role)

    teamStaff.push(employee)
})

//questions for intern
const internQuestions = () => {
inquirer.prompt([
    {
    type: "input",
    name: "name",
    message: "what is your name?"
},

{   
    type: "input",
    name: "id",
    message: "what is your ID number",
},
{
    type: "input",
    name: "email",
    message: "what is your email?"
},
{
    type:"input",
    name: "school",
    message: "What is the name of your school/university?"
},
])

.then(internAnswers => {
    const {name, id, email, school} = internAnswers
    const intern = new Intern (name, id, email, school)

    teamStaff.push(intern)
})
//questions for interns ends 

//questions for engineer 
const engineerQuestions = () => {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "what is your name?"
        },
        {   
            type: "input",
            name: "id",
            message: "what is your ID number",
        },
        {
         type: "input",
         name: "email",
         message: "what is your email?"
        },
        {
            type: "input",
            name: "github",
            message: "what is your github username?"
           }
    ])
}

.then(engineerAnswers => {
    const {name, id, email, github} = engineerAnswers
    const engineer = new Engineer (name, id, email, github)

    teamStaff.push(engineer)
})




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
            internQuestions()
        }else{
            renderFunction()
        }
    
})

function renderFunction() {
    fs.writeFileSync("dist/generatedPage.html", generateMarkdown(teamStaff))
}


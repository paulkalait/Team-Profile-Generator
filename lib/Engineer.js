//get access to the employee constructor via require
const Employee = require("./Employee")

//use the extend method to reference engineer is the child of Employee parent constructor
class Engineer extends Employee {  
        // in addition engineer will also have the github property 
     constructor (name, id, email, github){
        super(name,id,email)

        this.github = github
     }

     getGithub() {
         return this.github
     }

     getRole() {
         return "Engineer"
     }
}

//export this class 
module.exports = Engineer
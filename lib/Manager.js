//manager is also an employee , reference employee constructor
const Employee = require('./Employee')

//add manager constructor
class Manager extends Employee{
    constructor (name,id,email, officeNumber){
       super(name,id,email)
       this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }
}

//export 
module.exports = Manager
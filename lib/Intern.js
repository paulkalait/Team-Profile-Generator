//since intern is employee must reference Employee js
const Employee = require('./Employee')

//use the extends method to reference the parent which is Empoloyee
class Intern extends Employee{
    constructor(name,id,email,school){
        //call constructor of parent employee
        super(name,id,email)
        this.school = school
    }

    getSchool() {
        return this.school
    }

    getRole() {
        return "Intern"
    }
}

//export intern constructor
module.exports = Intern


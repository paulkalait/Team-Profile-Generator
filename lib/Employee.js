//Employee  Constructor in es6 class 
class Employee {
    constructor(name, id, email) {
        this.name = name
        this.name = id
        this.email = email
    }

    //return values 
    getName () {
        return this.name
    }

    getId() {
        return this.id
    }
    getEmail(){
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

//export this class
module.exports = Employee
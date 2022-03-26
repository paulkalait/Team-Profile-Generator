const Employee = require('../lib/Employee')

test("test for getName", () => {
    const employee = new Employee("joe", "7", "joedoe@gmail.com")

    expect(employee.getName()).toBe("joe")
})

test("test id", () => {
    const employee = new Employee("joe", "7", "joedoe@gmail.com")

    expect(employee.id).toBe("7")
})

test("test email", () => {
    const employee = new Employee("joe", "7",  "joedoe@gmail.com")

    expect(employee.email).toBe("joedoe@gmail.com")
})

test("makes a test for getRole", () =>{
    const employee = new Employee("joe", "7", "joedoe@gmail.com")

    expect(employee.getRole()).toBe("Employee")
}
)
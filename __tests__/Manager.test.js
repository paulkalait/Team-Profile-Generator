
const Manager = require("../lib/Manager")


test("makes a test for getROle", () =>{
    const johnManager = new Manager("john", "1", "john@gmail.com", "2")

    expect(johnManager.getRole()).toBe("Manager")
}
)

test("test name", () => {
    const johnManager = new Manager("john", "1",  "john@gmail.com", "2")

    expect(johnManager.name).toBe("john")
})

test("test id", () => {
    const johnManager = new Manager("john", "1",  "john@gmail.com", "2")

    expect(johnManager.id).toBe("1")
})

test("test email", () => {
    const johnManager = new Manager("john", "1",  "john@gmail.com", "2")

    expect(johnManager.email).toBe("john@gmail.com")
})

test("test Office number", () => {
    const johnManager = new Manager("john", "1",  "john@gmail.com", "2")

    expect(johnManager.officeNumber).toBe("2")
})
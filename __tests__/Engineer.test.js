const Engineer = require("../lib/Engineer")

test("makes a test for getROle", () =>{
    const paulEngineer = new Engineer("paul", "2", "paul@gmail.com", "paulkalait")

    expect(paulEngineer.getRole()).toBe("Engineer")
}
)

test("test for github", () => {
    const paulEngineer = new Engineer("paul", "2", "paul@gmail.com", "paulkalait")

    expect(paulEngineer.getGithub()).toBe("paulkalait")
})


test("test name", () => {
    const paulEngineer = new Engineer("paul", "2", "paul@gmail.com", "paulkalait")

    expect(paulEngineer.name).toBe("paul")
})

test("test id", () => {
    const paulEngineer = new Engineer("paul", "2", "paul@gmail.com", "paulkalait")

    expect(paulEngineer.id).toBe("2")
})

test("test email", () => {
    const paulEngineer = new Engineer("john", "2",  "paul@gmail.com", "paulkalait")

    expect(paulEngineer.email).toBe("paul@gmail.com")
})

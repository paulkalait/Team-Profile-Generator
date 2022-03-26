const Intern = require("../lib/Intern")

test("makes a test for getRole", () =>{
    const majaIntern = new Intern("paul", "2", "paul@gmail.com", "paulkalait")

    expect(majaIntern.getRole()).toBe("Intern")
}
)

test("test for school", () => {
    const majaIntern = new Intern("paul", "2", "paul@gmail.com", "CCSU")

    expect(majaIntern.getSchool()).toBe("CCSU")
})


test("test name", () => {
    const majaIntern = new Intern("maja", "2", "maja@gmail.com", "CCSU")

    expect(majaIntern.name).toBe("maja")
})

test("test id", () => {
    const majaIntern = new Intern("maja", "3", "maja@gmail.com", "CCSU")

    expect(majaIntern.id).toBe("3")
})

test("test email", () => {
    const majaIntern = new Intern("maja", "3",  "maja@gmail.com", "CCSU")

    expect(majaIntern.email).toBe("maja@gmail.com")
})

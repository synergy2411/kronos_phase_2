// Test Suite
describe("User Component Suite", () => {

  beforeEach(()=>{
    console.log("BEFORE EACH")
  })

  beforeAll(()=>{
    console.log("BEFORE ALL")
  })
  // Test case
  it("Test 01", () => {
    expect(true).toBeTruthy()
  })
  it("Test 02", () => {
    expect(1).toEqual(1)
  })
  it("Test 03", () => {
    expect("Hello world").toContain("world")
  })
})

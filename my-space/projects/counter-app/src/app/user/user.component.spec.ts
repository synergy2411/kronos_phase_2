import { HttpClient, HttpClientModule } from "@angular/common/http"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { DataService } from "../services/data.service"
import { UserComponent } from "./user.component"


describe("User Component Suite", () => {

  beforeEach(async ()=>{
    await TestBed.configureTestingModule({
      declarations : [UserComponent],
      imports : [HttpClientModule],
      providers : [DataService]
    }).compileComponents()
  })
  let fixture : ComponentFixture<UserComponent>;
  let app : UserComponent;
  let ds : DataService;
  let httpClient : HttpClient;

  beforeEach(() => {
     fixture = TestBed.createComponent(UserComponent);
     app = fixture.componentInstance;
     ds = new DataService()
    //  httpClient = new HttpClient()
     fixture.detectChanges();
  })

  it("Should populate the data from DataService", () => {

  })


  // Component Creation
  it("UserComponent creation", () => {
    expect(app).toBeTruthy()
  })

  // Property Populated
  it("Should populate the username property", () => {
    expect(app.username).not.toBeUndefined()
  })

  // Template Generation
  it("Should render the username on template", () => {
    let compiledTemplate =  fixture.nativeElement;
    expect(compiledTemplate.querySelector("p").textContent).toContain("Foo")
  })

  it("Should have Angular in heading", () => {
    let compiledTemplate =  fixture.nativeElement;
    expect(compiledTemplate.querySelector("h1").textContent).toContain("Angular")
  })

})






// Test Suite
// describe("User Component Suite", () => {

//   beforeEach(()=>{
//     console.log("BEFORE EACH")
//   })

//   beforeAll(()=>{
//     console.log("BEFORE ALL")
//   })
//   // Test case
//   it("Test 01", () => {
//     expect(true).toBeTruthy()
//   })
//   it("Test 02", () => {
//     expect(1).toEqual(1)
//   })
//   it("Test 03", () => {
//     expect("Hello world").toContain("world")
//   })
// })

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TestBed } from "@angular/core/testing";
import { DataService } from "./data.service"

describe("Data Service Suite", () => {

   let dataService: DataService;

  beforeEach(() => {
    dataService = new DataService();
  })

  it("Should get the user name as 'Foo'", () => {
    const username = dataService.getUserName()
    expect(username).toEqual('Foo');
  })

  it("Should set the user name as 'Bar'", () => {
    dataService.setUserName("Bar")
    const username = dataService.getUserName()
    expect(username).toEqual('Bar')
  })

  it("Should test the promise function", (done) => {
    dataService.getPromise().then(response => {
      expect(response).toBeTruthy()
      done()
    })
  })

  it("Should test the observable function", (done) => {
    dataService.getObservable().subscribe(data => {
      console.log("DATA - ", data);
      expect(data).toBeTruthy();
      done()
    })
  })

})

import { HttpClient, HttpClientModule } from "@angular/common/http";
import { getTestBed, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DataService } from "./data.service"

describe("Data Service Suite", () => {

  let injector : TestBed;
  let service : DataService;
  let mockHttp : HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports :   [HttpClientTestingModule],
      providers:  [DataService]
    })
    injector=getTestBed();
    service = injector.get(DataService);
    mockHttp = injector.get(HttpTestingController)
  })

  it("Should test the http GET Call", () => {

    let mockData = [
      {id : 1, label : "shopping"},
      {id : 2, label : "grocery"},
    ]
    // Subscribe the function
    service.getApiData().subscribe(response => {
      expect(response).toEqual(mockData)
      expect(response['length']).toEqual(2)
    })
    // Mock the request - expectOne
    const req = mockHttp.expectOne("https://reqres.in/api/users")
    expect(req.request.method).toBe("GET")
    // flush the request by supplying the mock data
    req.flush(mockData)

  })

  afterEach(() => {
    mockHttp.verify()
  })

})






// describe("Data Service Suite", () => {

//    let dataService: DataService;

//   beforeEach(() => {
//     dataService = new DataService();
//   })

//   it("Should get the user name as 'Foo'", () => {
//     const username = dataService.getUserName()
//     expect(username).toEqual('Foo');
//   })

//   it("Should set the user name as 'Bar'", () => {
//     dataService.setUserName("Bar")
//     const username = dataService.getUserName()
//     expect(username).toEqual('Bar')
//   })

//   it("Should test the promise function", (done) => {
//     dataService.getPromise().then(response => {
//       expect(response).toBeTruthy()
//       done()
//     })
//   })

//   it("Should test the observable function", (done) => {
//     dataService.getObservable().subscribe(data => {
//       console.log("DATA - ", data);
//       expect(data).toBeTruthy();
//       done()
//     })
//   })

// })

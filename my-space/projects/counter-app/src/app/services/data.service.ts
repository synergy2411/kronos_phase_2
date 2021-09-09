import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { from } from "rxjs";

@Injectable()
export class DataService{

  user = { name : "Foo" }

  // constructor(private http:  HttpClient){}

  getUserName(){
    return this.user.name;
  }

  setUserName(name){
    this.user.name = name
  }

  getPromise(){
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({message : "RESOLVED"})
      }, 3000)
    })
  }

  getObservable(){
    return from(["Apple", "Banana", "Orange"])
  }

  getApiData(){
    // return this.http.get("https://reqres.in/api/users?page=2")
  }

}

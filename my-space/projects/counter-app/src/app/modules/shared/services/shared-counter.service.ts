import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedCounterService {

  counter : number = 0;

  constructor() { }
}

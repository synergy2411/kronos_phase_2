import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'counter-app';
  counter : number;
  constructor(private store : Store<any>){}

  ngOnInit(){
    this.store.subscribe((data : any) => {
      this.counter = data['ctr'].counter
    })
  }
}

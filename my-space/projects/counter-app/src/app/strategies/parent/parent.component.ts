import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  todo : {label : string} = {label : "to buy the pulses"};

  onRefChange(){
    this.todo = { label : "to pot the plant"}
  }

  onValChange(){
    this.todo.label = "to renew insurance";
  }


  constructor() { }

  ngOnInit(): void {
    // this.dataService.getApi().subscribe(data => {
    //   this.user = data;
    // })
  }

}

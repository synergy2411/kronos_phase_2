import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-track-demo',
  templateUrl: './ng-track-demo.component.html',
  styleUrls: ['./ng-track-demo.component.css']
})
export class NgTrackDemoComponent implements OnInit {

  todoCollection = [
    {id : 1, label : "grocery"},
    {id : 2,label : "shopping"},
    {id : 3,label : "planting"},
]

onAddItem(){
  this.todoCollection = [
    {id : 1, label : "grocery"},
    {id : 2,label : "shopping"},
    {id : 3,label : "insurnace"},
]
}



trackByLabel(idx, el){
  return el.id
}

  constructor() { }

  ngOnInit(): void {
  }

}



// ng build

// - ES5 builds - older browsers
// - ES6/ ES2015 builds - latest browsers

// - Flatten ECMA Script Module - FESM - run in older browsers - IE8

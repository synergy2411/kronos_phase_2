import { Component, OnInit } from '@angular/core';
import { EagerCounterService } from '../../../eager/services/eager-counter.service';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

  constructor(private eagerService : EagerCounterService) { }

  getEagerCounter(){
    return this.eagerService.counter
  }

  onIncreaseEagerCounter(){
    this.eagerService.counter++;
  }
  ngOnInit(): void {
  }

}

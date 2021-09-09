import { Component, OnInit } from '@angular/core';
import { EagerCounterService } from '../../services/eager-counter.service';

@Component({
  selector: 'app-i-am-eager',
  templateUrl: './i-am-eager.component.html',
  styleUrls: ['./i-am-eager.component.css']
})
export class IAmEagerComponent implements OnInit {

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

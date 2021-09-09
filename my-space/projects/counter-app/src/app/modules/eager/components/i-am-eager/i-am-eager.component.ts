import { Component, OnInit } from '@angular/core';
import { LazyCounterService } from '../../../lazy/services/lazy-counter.service';
import { SharedCounterService } from '../../../shared/services/shared-counter.service';
import { EagerCounterService } from '../../services/eager-counter.service';

@Component({
  selector: 'app-i-am-eager',
  templateUrl: './i-am-eager.component.html',
  styleUrls: ['./i-am-eager.component.css']
})
export class IAmEagerComponent implements OnInit {

  constructor(
    private eagerService : EagerCounterService,
    private lazyService : LazyCounterService,
    private sharedService : SharedCounterService
    ) { }

    getSharedCounter(){
      return this.sharedService.counter
    }
    onIncreaseSharedCounter(){
      this.sharedService.counter++
    }


    getLazyCounter(){
      return this.lazyService.counter;
    }

    onIncreaseLazyCounter(){
      this.lazyService.counter++;
    }

  getEagerCounter(){
    return this.eagerService.counter
  }

  onIncreaseEagerCounter(){
    this.eagerService.counter++;
  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { EagerCounterService } from '../../../eager/services/eager-counter.service';
import { SharedCounterService } from '../../../shared/services/shared-counter.service';
import { LazyCounterService } from '../../services/lazy-counter.service';

@Component({
  selector: 'app-i-am-lazy',
  templateUrl: './i-am-lazy.component.html',
  styleUrls: ['./i-am-lazy.component.css']
})
export class IAmLazyComponent implements OnInit {

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

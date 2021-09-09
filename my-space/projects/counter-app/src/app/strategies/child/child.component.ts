import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.Default
})
export class ChildComponent implements OnInit {

  @Input() todo : {label : string}

  constructor(
    private cdRef : ChangeDetectorRef,
    private zone : NgZone
    ) { }

  onDetech(){
    this.cdRef.detach()
  }

  onReattach(){
    this.cdRef.reattach()
  }

  runOutsideAngularEnv(){
    this.zone.runOutsideAngular(()=>{
      alert("shhh.... Angular can't hear this!")
      this.todo.label = "Running outside angular"
      this.cdRef.detectChanges()
    })
  }

  ngOnInit(): void {
  }


}

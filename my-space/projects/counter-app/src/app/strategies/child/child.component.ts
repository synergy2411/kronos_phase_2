import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  changeDetection : ChangeDetectionStrategy.OnPush
})
export class ChildComponent implements OnInit {

  @Input() todo : {label : string}

  constructor() { }

  ngOnInit(): void {
  }

}

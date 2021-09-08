import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-the-demo-lib',
  template: `
    <p>
      the-demo-lib works!
    </p>
  `,
  styles: [
  ]
})
export class TheDemoLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

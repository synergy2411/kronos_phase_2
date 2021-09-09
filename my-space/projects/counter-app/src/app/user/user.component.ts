import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers :   [DataService]
})
export class UserComponent implements OnInit {

  username : string;
  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.username = this.dataService.getUserName()
  }

}

// Component creation
// properties population
// Template generation

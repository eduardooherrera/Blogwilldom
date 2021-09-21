import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent implements OnInit {

  add: boolean;
  constructor() {
    this.add = false;
   }

  ngOnInit(): void {
  }

}

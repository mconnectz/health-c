import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepatient',
  templateUrl: './homepatient.component.html',
  styleUrls: ['./homepatient.component.css']
})
export class HomepatientComponent implements OnInit {
  start: boolean = false;
  constructor() { }

  ngOnInit () {
    setTimeout(() => this.start = true, 200)
  }

}

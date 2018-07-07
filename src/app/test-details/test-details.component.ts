import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-details',
  templateUrl: './test-details.component.html',
  styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {

  
  testDetails = [
    {
      title: 'Tester',
      description: 'Gragnama'
    },
    {
      title: 'CI Tool',
      description: 'Jenkins'
    },
    {
      title: 'Local Tunnel',
      description: 'Null'
    },
    {
      title: 'No of Issues',
      description: '20'
    },
    {
      title: 'Start Time',
      description: '16:00'
    },
    {
      title: 'End Time',
      description: '20:00'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}

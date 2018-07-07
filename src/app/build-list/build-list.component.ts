import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-list',
  templateUrl: './build-list.component.html',
  styleUrls: ['./build-list.component.scss']
})
export class BuildListComponent implements OnInit {

  buildList = [
    {
      buildName: 'Build #1',
      buildLetter: 'F',
      _id: '1'
    },
    {
      buildName: 'Build #2',
      buildLetter: 'M',
      _id: '2'
    },
    {
      buildName: 'Build #3',
      buildLetter: 'L',
      _id: '3'
    },
    {
      buildName: 'Build #4',
      buildLetter: 'U',
      _id: '4'
    },
  ];


  constructor() { }

  ngOnInit() {
  }



}

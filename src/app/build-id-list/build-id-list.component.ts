import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-id-list',
  templateUrl: './build-id-list.component.html',
  styleUrls: ['./build-id-list.component.scss']
})
export class BuildIdListComponent implements OnInit {

  buildIdList = [
    {
      id: 'XYZ12-GHT56-RTG56-2346	',
      date: '02/01/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346	',
      date: '02/02/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346	',
      date: '02/03/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346',
      date: '02/04/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346	',
      date: '02/03/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346',
      date: '02/04/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346	',
      date: '02/03/2017'
    },
    {
      id: 'XYZ12-GHT56-RTG56-2346',
      date: '02/04/2017'
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}

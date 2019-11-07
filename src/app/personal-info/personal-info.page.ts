import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.page.html',
  styleUrls: ['./personal-info.page.scss'],
})
export class PersonalInfoPage implements OnInit {

  firstname = ' ';
  lastname = ' ';
  moduleNum: any;

  constructor() { }

  ngOnInit() {
  }



}

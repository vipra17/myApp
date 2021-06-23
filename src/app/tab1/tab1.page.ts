import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  percent: number = 50;
  radius:number = 100;
  fullTime: any =  '00:01:30';

}

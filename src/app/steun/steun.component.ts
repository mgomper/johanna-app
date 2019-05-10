import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-steun',
  templateUrl: './steun.component.html',
  styleUrls: ['./steun.component.css']
})
export class SteunComponent implements OnInit {

  constructor(private eventManager: EventManager) {
    this.eventManager.addGlobalEventListener('window', 'resize', this.OnResize.bind(this));
   }

   private OnResize(event: any) {
    if ($(document).height() < 900) {
      $("#footer").css("position", "relative");
      $("#footer").css("display", "block");
      $("#footer").css("width", "100%");
      $("#footer").css("margin-top", "35px");
      $("#footer").css("margin-bottom", "-10px");
    }
  }

  ngOnInit() {


  }

}

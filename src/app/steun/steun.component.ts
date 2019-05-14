import { Component, OnInit } from '@angular/core';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-steun',
  templateUrl: './steun.component.html',
  styleUrls: ['./steun.component.css']
})
export class SteunComponent implements OnInit {

  constructor(private eventManager: EventManager) {
   }

  

  ngOnInit() {
    if (true) {
      $("#footer").css("position", "relative");
      $("#footer").css("display", "block");
      $("#footer").css("width", "100%");
      $("#footer").css("margin-top", "60px");
      $("#footer").css("margin-bottom", "-50px");
    }
  }

}

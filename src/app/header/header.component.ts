import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  active: boolean = false;
 
  constructor(private router: Router) { }

  ngOnInit() {
  }

  switchMobileMenu() {
    this.active = !this.active;
    if (this.active) {
      document.getElementById("sidenav").style.width = "100%";
      document.getElementById("bars").style.color = "white";
    } else {
      document.getElementById("sidenav").style.width = "0";
      document.getElementById("bars").style.color = "black";   
    }
  }

  reload(){
    window.location.href = "http://localhost:4200/agenda"
  }

}

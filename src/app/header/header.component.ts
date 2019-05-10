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
    // if ($(document).height() <= $(window).height() ) {
    //   $(".router-links").css("margin-right", "100px");
    //  }
  }

  switchMobileMenu() {
    this.active = !this.active;
    if (this.active) {
      document.getElementById("sidenav").style.width = "100%";
      document.getElementById("bars").style.color = "white";
      setTimeout(() => {
        $(".menuItems").css("opacity", "1");
      }, 220);
    } else {
      document.getElementById("sidenav").style.width = "0";
      document.getElementById("bars").style.color = "black";
      $(".menuItems").css("opacity", "0");
    }


  }
 
  reload(){
    window.location.href = "https://molenjohannahuijbergen.nl/agenda"
  }

}

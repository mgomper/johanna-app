import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-johanna',
  templateUrl: './johanna.component.html',
  styleUrls: ['./johanna.component.css']
})
export class JohannaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $( "#lightbox" ).click(function() {
      $('#lightbox').css("width", "0");
      $("#lightbox-image").attr("src", "");
    });
  }

  scrollToContent() {
    $('html, body').animate({scrollTop: $("#title-1").offset().top}, 500);
  }

  scrollToAlgemeen() {
    $('html, body').animate({scrollTop: $("#title-1").offset().top}, 500);
  }

  scrollToGeschiedenis() {
    $('html, body').animate({scrollTop: $("#title-2").offset().top}, 500);
  }

  scrollToDetails() {
    $('html, body').animate({scrollTop: $("#title-3").offset().top}, 500);
  }

  scrollToFotos() {
    $('html, body').animate({scrollTop: $("#title-4").offset().top}, 500);
  }

  openLightbox(src: string) {
    $('#lightbox').css("width", "100vw");
    $("#lightbox-image").attr("src", src);
  }

}

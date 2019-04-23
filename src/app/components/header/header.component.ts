import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 100) {
          $('#main-nav').addClass('fixed');
      } else {
          $('#main-nav').removeClass('fixed');
      }
  });
}

  clicked(data:any){
    console.log(data);
    $('.active').removeClass('active');
    $('#'+data).addClass('active');

  }
}
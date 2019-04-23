import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  users=[1,2,3,4,5];
  lastC;
  constructor() { }

  ngOnInit() {

  }

  flip(data){
    if(this.lastC==data){
      $('.'+data).removeClass('flip');
      this.lastC="";
    }
    else{
      this.lastC=data;
    $('.flip').removeClass('flip');
    $('.'+data).addClass('flip');

    }
    
  }


}

import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';
@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   this.typeBio();
   this.typeBioMb();
  }


  typeBio()
  {
    const options = {
      strings: ["To learn and function effectively in an organization and be able to deliver to the bottom-line.",
      " Bringing strong computer skills, and personal attributes including devotion, meeting goals, inventiveness, and the attitude to follow through.",
      " To constantly upgrade my knowledge and skills and make a difference in whatever I do.",
              ],
      typeSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 
 const typed = new Typed('.typed', options);
  }


  typeBioMb()
  {
    const options = {
      strings: ["To learn and function effectively in an organization and be able to deliver to the bottom-line.",
      " Bringing strong computer skills, and personal attributes including devotion, meeting goals, inventiveness, and the attitude to follow through.",
      " To constantly upgrade my knowledge and skills and make a difference in whatever I do.",
              ],
      typeSpeed: 100,
      showCursor: true,
      cursorChar: '|',
      loop: true
 };
 
 const typedmb = new Typed('.typedmb', options);
  }

  

}

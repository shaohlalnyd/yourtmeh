import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-thumbline-academy',
  templateUrl: './thumbline-academy.component.html',
  styleUrls: ['./thumbline-academy.component.scss']
})
export class ThumblineAcademyComponent implements OnInit {

  academyWidth:number

  @HostListener('window:resize')
  onresize(){
    this.academyWidth = document.getElementsByClassName('academy')[0].clientWidth
  }

  constructor() { }

  ngOnInit() {
    this.academyWidth= document.getElementsByClassName('academy')[0].clientWidth
  }

}

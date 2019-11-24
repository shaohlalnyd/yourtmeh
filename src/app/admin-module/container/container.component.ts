import { Component, OnInit, HostListener, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
})
export class ContainerComponent implements OnInit {
  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 750) {
      if (this.hasChanged == false || this.largeSize == false) {
        this.largeSize = true
        if (window.innerWidth > 750 && window.innerWidth < 1000) {
          this.largeSizeSmall = true
        }
        else {
          this.largeSizeSmall = false
        }
      }

    }
    else {
      this.largeSize = false
      this.largeSizeSmall = true
    }
  }
  constructor() { }
  largeSize: boolean
  largeSizeSmall: boolean = false
  smallSidebar:boolean=false
  hasChanged: boolean = false
  optionsTooltip: {} = {
    karbaran: "",
    menu: "",
    agahi: "",
    news: "",
    post: "",
  }
  ngOnInit() {
    if (window.innerWidth > 750) {
      this.largeSize = true
      if (window.innerWidth > 750 && window.innerWidth < 1000) {
        this.largeSizeSmall = true
      }
      else {
        this.largeSizeSmall = false
      }

    }
    else {
      this.largeSize = false
    }
  }
  handleSidebar() {
    this.hasChanged = true
    if (this.largeSize) {
      this.largeSizeSmall = !this.largeSizeSmall
    }
    else{
      this.smallSidebar=!this.smallSidebar
    }
  }
  showSub() {

  }
}

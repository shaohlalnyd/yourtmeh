import { Component, OnInit, HostListener } from '@angular/core';
import { DataService } from '../data.service';
import { Advertising } from '../models/Advertising';
@Component({
  selector: 'app-new-sale-ad',
  templateUrl: './new-sale-ad.component.html',
  styleUrls: ['./new-sale-ad.component.scss']
})
export class NewSaleAdComponent implements OnInit {
  windowWidth: number
  NSABoxTop: number
  adAnim: boolean = false
  @HostListener("window:resize")
  onResize() {
      this.adWidth = document.getElementsByClassName('ad')[0].clientWidth
      this.windowWidth = window.innerWidth
      console.log(this.adWidth)
  }
  @HostListener('window:scroll')
  onScroll() {
    if (window.scrollY > this.NSABoxTop - 200) {
      this.adAnim = true
    }
  }

  constructor(private dataService: DataService) { }
  advertising: Advertising[] = []
  adWidth: number
  indexOfAd: number
  ngOnInit() {
    this.dataService.getRoprtsName().subscribe(res => {
      console.log(res)
    })
    if (window.scrollY > this.NSABoxTop - 200) {
      this.adAnim = true
    }
    setTimeout(() => {
      this.NSABoxTop = document.getElementById('NSABox').offsetTop
    }, 10);
    this.windowWidth = window.innerWidth
    this.dataService.getLastHorses(6, 0).subscribe(res => {
      this.advertising = res["msg"]
      setTimeout(() => {
        this.adWidth = document.getElementsByClassName('ad')[0].clientWidth
      }, 10);
      for (let i = 0; i < this.advertising.length; i++) {
        setTimeout(() => {
          this.indexOfAd = i
        }, 10);
      }
    }, err => {
      console.log(err)
    })
  }

}

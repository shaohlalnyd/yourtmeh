import { Component, OnInit, HostListener } from '@angular/core';
import {$} from '../../../assets/jquery.min.js'
import { NgxSmartModalService } from 'ngx-smart-modal';
declare var $ :any
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {
  adWidth: number
  @HostListener("window:resize")
  onResize() {
      this.adWidth = document.getElementsByClassName('ad')[0].clientWidth
  }

  constructor(public ngxSmartModalService : NgxSmartModalService) { }
  ngOnInit() {
    setTimeout(() => {
      this.adWidth=document.getElementsByClassName('ad')[0].clientWidth
    }, 100);
  }
  filterHandler(){

  }

}

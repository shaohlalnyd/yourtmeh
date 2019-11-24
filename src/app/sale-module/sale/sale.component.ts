import { Component, OnInit } from '@angular/core';
import {$} from '../../../assets/jquery.min.js'
import { NgxSmartModalService } from 'ngx-smart-modal';
declare var $ :any
@Component({
  selector: 'app-sale',
  templateUrl: './sale.component.html',
  styleUrls: ['./sale.component.scss']
})
export class SaleComponent implements OnInit {

  constructor(public ngxSmartModalService : NgxSmartModalService) { }
  ngOnInit() {

  }
  filterHandler(){

  }

}

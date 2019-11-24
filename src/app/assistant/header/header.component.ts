import { Component, OnInit, HostListener } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssistanService } from '../assistan.service';
import {NgxSmartModalService} from 'ngx-smart-modal'
import { DataService } from '../data.service';
import {menuMode} from "../models/menuModel"
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showSearch: boolean = false
  showTopOfHeader: boolean
  url:string=""
  showSideBar:boolean=false
  showBurger=false
  headerNone:boolean=false
  headerHeight:boolean=false
  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if(window.innerWidth <=1130 ){
      this.showBurger=true
      this.headerHeight=true
      setTimeout(() => {
        this.headerNone=true
      }, 50);
    }
    else{
      this.showBurger=false
      this.headerNone=false
      setTimeout(() => {
        this.headerHeight=false
      }, 50);
    }
  }
  constructor(private router : Router,private assistant:AssistanService,
    public ngxSmartModalService : NgxSmartModalService,
    private dataService : DataService) { }

    menus : menuMode[]=[]
  ngOnInit() {
    this.assistant.url.subscribe(res=>{
      this.url=res
    })
    if(window.pageYOffset<= 49){
      this.showTopOfHeader=true
    }
    else{
      this.showTopOfHeader=false
    }
    if(window.innerWidth <=1130){
      this.showBurger=true
      this.headerHeight=true
      setTimeout(() => {
        this.headerNone=true
      }, 50);
    }
    this.dataService.getAllMenu().subscribe(res=>{
      this.menus=res["menu"]
    })
  }

  changeRoute(link:string){
    this.router.navigateByUrl("/"+link)
    this.url=link
  }

  showHeader(){
    this.headerNone=!this.headerNone
    setTimeout(() => {
      this.headerHeight=!this.headerHeight
    }, 500);
  }

}

import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-thumbline-news',
  templateUrl: './thumbline-news.component.html',
  styleUrls: ['./thumbline-news.component.scss']
})
export class ThumblineNewsComponent implements OnInit {

  constructor(private dataService :DataService) { }

  ngOnInit() {
    this.dataService.getLastNews(2,0).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

}

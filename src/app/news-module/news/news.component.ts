import { Component, OnInit } from '@angular/core';
import { AssistanService } from 'src/app/assistant/assistan.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  constructor(private assistant : AssistanService) { }

  ngOnInit() {

  }

}

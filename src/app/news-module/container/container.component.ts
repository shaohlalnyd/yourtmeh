import { Component, OnInit } from '@angular/core';
import { AssistanService } from 'src/app/assistant/assistan.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor(private assistant : AssistanService) { }

  ngOnInit() {
    this.assistant.url.emit('news')

  }

}

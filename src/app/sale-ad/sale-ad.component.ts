import { Component, OnInit } from '@angular/core';
import { AssistanService } from '../assistant/assistan.service';

@Component({
  selector: 'app-sale-ad',
  templateUrl: './sale-ad.component.html',
  styleUrls: ['./sale-ad.component.scss']
})
export class SaleAdComponent implements OnInit {

  constructor(private assistant: AssistanService) { }

  ngOnInit() {
  }
  showPersonVerification(){
    this.assistant.showPersonVerification.emit(true)
  }

}

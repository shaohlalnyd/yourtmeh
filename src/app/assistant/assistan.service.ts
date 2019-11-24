import { Injectable,EventEmitter } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AssistanService {

  constructor() { }
  url:EventEmitter<any> = new EventEmitter()
  showPersonVerification:EventEmitter<boolean> = new EventEmitter
}

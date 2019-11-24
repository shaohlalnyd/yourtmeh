import { Component, OnInit } from '@angular/core';
import { AssistanService } from '../assistan.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-person-verification',
  templateUrl: './person-verification.component.html',
  styleUrls: ['./person-verification.component.scss']
})
export class PersonVerificationComponent implements OnInit {

  constructor(private assistant:AssistanService,
    private dataService : DataService) { }
  show:boolean=false
  activeTab:string="mobile"
  phoneNumber:string=""
  sendedCode:number
  error:string=""
  enteredCode:string=""
  codeError:string=""
  ngOnInit() {
    this.assistant.showPersonVerification.subscribe(res=>{
      this.show=res
    })
  }
  sendPhone(){
    let regex = /^(\+98|0)?9\d{9}$/
    if(this.phoneNumber.match(regex)){
      this.dataService.addPhoneGetCode(this.phoneNumber).subscribe(res=>{
        this.sendedCode=res['msg']
        this.activeTab="code"
      },err=>{
        console.log(err)
      })
      this.error=""
    }
    else{
      this.error="فرمت شماره تلفن وارد شده اشتباه میباشد"
    }
  }
  sendCode(){
    this.dataService.completeAddPhoneAndGetToken(this.phoneNumber,this.enteredCode).subscribe(res=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }
  correctionNumber(){

    this.dataService.wrongPhone(this.phoneNumber).subscribe(res=>{
      if(res['msg']!="Not deleted"){
        this.activeTab="mobile"
      }
      else{
        this.codeError="مشکلی در ارتباط با سرور به وجود آمده است"
      }
    },err=>{
      console.log(err)
    })
  }
}

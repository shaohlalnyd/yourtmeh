import { Component, OnInit } from '@angular/core';
import { horse } from '../models/horse';

@Component({
  selector: 'app-sale-ad-modal',
  templateUrl: './sale-ad-modal.component.html',
  styleUrls: ['./sale-ad-modal.component.scss']
})
export class SaleAdModalComponent implements OnInit {
  fileToUpload: File = null;
  imagePath: any[] = []
  imgURL: any[] = []
  message: string
  selectedFiles: any = []
  imagesPrev: any = []
  constructor() { }

  ngOnInit() {
  }
  horse: horse = new horse()
  preview(files) {
    if (files.length === 0)
      return;
    // for (let i = 0; i < files.length; i++) {
    //   this.horse.images.push(files[i])
    //   var reader = new FileReader();
    //   reader.readAsDataURL(files[i]);
    //   reader.onload =  (_event) => {
    //     console.log(reader.result)
    //     this.imgURL.push(reader.result);
    //   }
    // }
    this.imageFuncs(files, files.length)
  }
  imageFuncs(files, index) {
    if (index <= 0) {
      return
    }
    this.horse.images.push(files[index - 1])
    var reader = new FileReader()
    reader.readAsDataURL(files[index - 1])
    reader.onload = (_event) => {
      this.imgURL.push(reader.result)
      this.imageFuncs(files, index - 1)
    }
  }
  removeImg(index: number) {
    this.imgURL.splice(index, 1)
    this.imagePath.splice(index, 1)
  }
  changecategory(event) {
    this.horse.category = event.target.value
    alert(this.horse.category)
  }
  sendAd() {
    console.log(this.horse)
  }
}
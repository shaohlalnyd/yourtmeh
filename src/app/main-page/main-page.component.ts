import { Component, OnInit, HostListener } from '@angular/core';
import { AssistanService } from '../assistant/assistan.service';
declare var $: any
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  constructor(private assistant: AssistanService) { }

  ngOnInit() {

    this.assistant.url.emit('')


    $('.hoursesDiv').slick({
      infinite: true,
      speed: 300,
      // slidesToShow: 8,
      draggable: false,
      responsive: [
        {
          breakpoint: 3000,
          settings: {
            slidesToShow: 11,
            slidesToScroll: 1,
          }
        }
        , {
          breakpoint: 1720,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1500,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1330,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 1060,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 940,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 740,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 630,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
  a
  prev() {
    $(".hoursesDiv").slick('slickPrev')
  }
  next() {
    $(".hoursesDiv").slick('slickNext')
  }


}

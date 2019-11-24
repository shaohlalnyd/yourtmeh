import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserService } from './user.service'
import { horse } from './models/horse';

export class DataService {

  constructor(private http: HttpClient, private userService: UserService) { }

  url: string = "http://45.82.139.47/api"
  header = new HttpHeaders({ 'Content-Type': 'application/json' })


  getAllNews(limit: number, offset: number): Observable<any> {
    let header = this.header
    let body = {
      limit: limit,
      offset: offset
    }
    return this.http.post(this.url + "/getAllNews", body, {
      headers: header
    })
  }
  getLastHorses(limit, offset) {
    let header = this.header
    let body = {
      limit: limit,
      offset: offset
    }
    return this.http.post(this.url + "/getLastHorses", body, {
      headers: header
    })
  }
  getLastNews(limit, offset) {
    let header = this.header
    let body = {
      limit: limit,
      offset: offset
    }
    return this.http.post(this.url + "/getLastNews", body, {
      headers: header
    })
  }
  addPhoneGetCode(phone: string) {
    let header = this.header
    let body = {
      phone: phone
    }
    return this.http.post(this.url + "/addPhoneGetCode", body, {
      headers: header
    })
  }
  completeAddPhoneAndGetToken(phone: string, code: string) {
    let header = this.header
    let body = {
      phone: phone,
      code: code
    }
    return this.http.post(this.url + "/completeAddPhoneAndGetToken", body, {
      headers: header
    })
  }

  wrongPhone(phone: string) {
    let header = this.header
    let body = {
      phone: phone,
    }
    return this.http.post(this.url + "/wrongPhone", body, {
      headers: header
    })
  }

  // addPhone(phoneNumber:any):Observable<any> {
  //   let header = this.header
  //   let body = {
  //     phone:phoneNumber
  //   }
  //   return this.http.post(this.url+"/addPhone",body,{
  //     headers:header
  //   })
  // }

  getNew(id: any): Observable<any> {
    let header = this.header
    let body = {
      id: id
    }
    return this.http.post(this.url + "/getNew", body, {
      headers: header
    })
  }

  deleteOneImg(link: any, img: any): Observable<any> {
    let header = this.header
    let body = {
      phone: this.userService.phone,
      link: link,
      img: img
    }
    return this.http.post(this.url + "/deleteOneImg", body, {
      headers: header
    })
  }


  horseAddImg(img: any, link): Observable<any> {
    let header = this.header
    let body = {
      img: img,
      phone: this.userService.phone,
      link: link
    }
    return this.http.post(this.url + "/horseAddImg", body, {
      headers: header
    })
  }

  getreports(): Observable<any> {
    let header = this.header
    return this.http.get(this.url + "/getreports", {
      headers: header
    })
  }

  addReport( report_name,  horse_poster_link,user_id): Observable<any> {
    let header = this.header
    let body = {
      report_name:  report_name,
      user_id: user_id,
      horse_poster_link:  horse_poster_link
    }
    return this.http.post(this.url+"/addReport", body, {
      headers: header
    })
  }

  showDetailPoster(link): Observable<any> {
    let header = this.header
    let body = {
      link: link,
      phone: this.userService.phone
    }
    return this.http.post(this.url + "/showDetailPoster", body, {
      headers: header
    })
  }
  adminEditMenu(id, name, href, style, flag): Observable<any> {
    let header = this.header
    let body = {
      id: id,
      name: name,
      href: href,
      style: style,
      flag: flag
    }
    return this.http.post(this.url + "/adminEditMenu", body, {
      headers: header
    })
  }
  adminAddMenu(name, href, style, flag): Observable<any> {
    let header = this.header
    let body = {
      name: name,
      href: href,
      style: style,
      flag: flag
    }
    return this.http.post(this.url + "/adminAddMenu", body, {
      headers: header
    })
  }
  adminDeleteMenu(id): Observable<any> {
    let header = this.header
    let body = {
      id: id
    }
    return this.http.post(this.url + "/adminDeleteMenu", body, {
      headers: header
    })
  }
  addNew(title, content, abstract): Observable<any> {
    let header = this.header
    let body = {
      title: title,
      content: content,
      abstract: abstract
    }
    return this.http.post(this.url + "/addNew", body, {
      headers: header
    })
  }
  addHorsePoster(name: string, price: number, category: any, description, image: any, priceToChar: string): Observable<any> {
    let header = this.header
    let body = {
      name: name,
      price: price,
      category: category,
      description: description,
      phone: this.userService.phone,
      image: image,
      priceToChar: priceToChar
    }
    return this.http.post(this.url + "/addHorsePoster", body, {
      headers: header
    })
  }
  my_poster(): Observable<any> {
    let header = this.header
    let body = {
      phone: this.userService.phone
    }
    return this.http.post(this.url + "/my-poster", body, {
      headers: header
    })
  }
  deletHorsePoster(link): Observable<any> {
    let header = this.header
    let body = {
      token: this.userService.token,
      phone: this.userService.phone,
      link: link
    }
    return this.http.post(this.url + "/deletHorsePoster", body, {
      headers: header
    })
  }
  editPoster(name: string, priceToChar, description, link, price, category): Observable<any> {
    let header = this.header
    let body = {
      token: this.userService.token,
      phone: this.userService.phone,
      name: name,
      priceToChar: priceToChar,
      description: description,
      link,
      price: price,
      category: category
    }
    return this.http.post(this.url + "/editPoster", body, {
      headers: header
    })
  }
  getHorses(limit, offset): Observable<any> {
    let body = {
      limit: limit,
      offset: offset
    }
    return this.http.post(this.url + "getHorses", body)
  }
  getAllMenu() {
    return this.http.get(this.url + "/get_all_menu", {
      headers: this.header
    })
  }
  addHorse(horse : horse){
    let header= this.header
    let body =  horse
    return this.http.post(this.url+"/addHorse",body,{
      headers:header
    })
  }
  getRoprtsName(){
    return this.http.get("http://45.82.139.47:4030/api/getRoprtsName", {
      headers: this.header
    })
  }
}

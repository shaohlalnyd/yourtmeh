import {Pipe,PipeTransform} from '@angular/core'

@Pipe({name:"priceToChar"})
export class priceToChar implements PipeTransform{
    thousent:number=1000
    milion:number =1000000
    billion : number =1000000000
    millionChar:string = "میلیون تومان"
    thousandChar:string = "هزار تومان"
    billionChar:string="میلیارد تومان"
    transform(price: number) {
        if(price < this.thousent){
            return price +" تومان"
        }
        else if (price >= this.thousent && price < this.milion){
            if(price==1000){
                return this.thousandChar
            }
            if(price % 1000==0){
                return price/this.thousent + this.thousandChar
            }
            else{
                return (price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+this.thousandChar)
            }
        }
        else if (price >= this.milion && price < this.billion){
            if(price==1000000){
                return this.millionChar
            }
            if(price % 1000000==0){
                console.log(price%this.milion)
                return price/this.milion + this.millionChar
            }
            else{
                return (price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+this.millionChar)
            }
        }
        else if (price >= this.billion){
            if(price==this.billion){
                return this.billionChar
            }
            if(price % this.billion ==0){
                return price/this.billion + this.billionChar
            }
            else{
                return (price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")+this.billionChar)
            }
        }
    }
}
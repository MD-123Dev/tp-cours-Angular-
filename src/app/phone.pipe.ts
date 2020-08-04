import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let newStr = "";
    

    //**add 0 in first is not esist */
    value = value.charAt(0) != 0 ? "0" + value : "" + value;


      return value;
    
    

  
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decrease'
})
export class DecreasePipe implements PipeTransform {

  transform(value: any, limite?: number): any {
     
      if(!value){
         return null
      }

    return value.substr(0, limite) + '....';
  }

}

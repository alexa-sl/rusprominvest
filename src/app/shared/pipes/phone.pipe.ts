import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(v: string): string {
    return '+7('+v[0]+v[1]+v[2]+')'+v[3]+v[4]+v[5]+'-'+v[6]+v[7]+'-'+v[8]+v[9];
  }

}

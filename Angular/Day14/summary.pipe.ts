import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:"summary"
})
export class SummaryPipe implements PipeTransform {
   // that ... dots indicates rest parameter
   // transform(value: any,start:number=0,end:number=15) {
    transform(value: any,start?:number,end?:number) {
        if(value==null){
            return value;
        }

        let str=(<string> value);
        // return (str.substring(0,15))+" ...";

        let minindex=start?start:0;
        let maxindex=end?end:15;

     //   return (str.substring(start,end))+" ...";
     return (str.substring(minindex,maxindex))+" ...";

    }

}
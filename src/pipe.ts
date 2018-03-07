import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name:'showWithLimit'})
export class Showall implements PipeTransform {
    transform(value,bool,limit){
       let newArray=[]
        if(bool){
            return value
        }else{
            for(let i=0;i<limit;i++){
                if(value.length>i){
                    newArray.push(value[i])
                }
               
            }
            return newArray
    }
}

}






























    /*   let newArray = [];
        if(bool){
            return value;
        }else{
            for(let i=0;i<limit;i++){
                if(value.length>i)
                    newArray.push(value[i]);
            }
        }

        return newArray;
    }*/
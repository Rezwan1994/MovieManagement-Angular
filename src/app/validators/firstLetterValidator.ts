import { AbstractControl, ValidatorFn } from "@angular/forms";

export function firstLeterUpperCase():ValidatorFn{
    return (control:AbstractControl):{[key: string]: any} | null  =>{
        const value = <string>control.value;
        if(!value) return null;
        if(value.length === 0) return null;
        const firstLetter = value[0];
        if(firstLetter  !== firstLetter.toUpperCase())
        {
            return{
               firstLeterUpperCase:{
                   message:"First letter must be uppercase."
               }
            }
       
        }
        return null;
    }
}
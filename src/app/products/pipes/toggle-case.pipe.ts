import { Pipe, PipeTransform } from "@angular/core";

// jesús | toggleCase = "JESÚS"
// JESÚS | toggleCase = "jesús"

@Pipe({
  name: "toggleCase",

})
export class ToggleCasePipe implements PipeTransform{
  transform(value: string, toUpper: boolean = false): string {
   return (toUpper) ? value.toUpperCase() : value.toLowerCase();
  }
}



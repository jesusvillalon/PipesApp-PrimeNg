import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "canFly",
})
export class CanFlyPipe implements PipeTransform{
  transform(toBoolean: boolean): string{
    return (toBoolean) ? "Vuela" : "No vuela"
  }
}

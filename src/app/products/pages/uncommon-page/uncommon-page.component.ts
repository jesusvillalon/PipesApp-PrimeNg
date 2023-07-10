import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  // i18n Select
  public name: string = "Jesús";
  public gender: "male"|"female" = "male";

  public invitationMap ={
    male: "invitarlo",
    female: "invitarla"
  }

  changeClient():void{
    this.name = "Melissa";
    this.gender = "female";
  }

  // i18n Plural
  public clients: string[] = ["María", "Jesús", "Chancho", "Román", "Raquel", "Lolilla"];

  public clientsMap = {
    "=0":"no tenemos ningún cliente esperando",
    "=1":"tenemos un cliente esperando",
    "=2":"tenemos 2 personas esperando",
    "other":"tenemos # clientes esperando",
  }

  deleteClient():void{
    this.clients.shift();
  }

  // keyvalue pipe
  public person = {
    name: "Jesús",
    age: 30,
    address: "Málaga, España"
  }

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000)
  .pipe(
    tap(value => console.log("tap: ", value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Tenemos data en la promesa.")
      console.log("Tenemos data en la promesa")
      this.person.name = "Otro nombre"
    }, 3500)
  })

}

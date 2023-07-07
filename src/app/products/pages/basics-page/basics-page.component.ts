import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = "jesús";
  public nameUpper: string = "JESÚS";
  public fullName: string = "jeSúS ViLLaLoN";
  public customDate: Date = new Date()


}

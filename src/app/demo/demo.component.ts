import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent {

  cities=[
    {id:1,name:"Mioveni"},
    {id:2,name:"Pitesti"},
    {id:3,name:"Bucuresti"},
  ]
}

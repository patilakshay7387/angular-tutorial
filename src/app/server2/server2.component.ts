import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-server2', 
  templateUrl: './server2.component.html',
  styleUrls: ['./server2.component.css']
})
export class Server2Component implements OnInit {

  nameee = 'basics';
  namee= "Angular Property Binding"
  isDisabled=true;
  isLogedin=true;

  capital() {
    let x = document.getElementById("fname");
    (<HTMLInputElement>x).value = (<HTMLInputElement>x).value.toUpperCase();//Event Binding
  }
  constructor() { }

  ngOnInit(): void {  
  } 

}

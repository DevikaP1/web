import { Component, OnInit } from '@angular/core';
import { myservice } from '../service/info-service';

@Component({
  selector: 'app-componentone',
  templateUrl: './componentone.component.html',
  styleUrls: ['./componentone.component.css']
})
export class ComponentoneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 ck()
 {
   alert("hi com1");
 }
onclickbtn(){
  const service=new myservice()
}
}


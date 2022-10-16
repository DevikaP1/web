import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comtwo',
  templateUrl: './comtwo.component.html',
  styleUrls: ['./comtwo.component.css']
})
export class ComtwoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ck(){
    alert("hi com2")
  }

}

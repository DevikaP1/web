import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comthree',
  templateUrl: './comthree.component.html',
  styleUrls: ['./comthree.component.css']
})
export class ComthreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ck(){
    alert("hi com3")
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="kochi"
today=Date();
user={
  id:100,
  name:"devu",
  DOB:'09-02-2000',
  salary:100000
}
}

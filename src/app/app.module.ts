import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComponentoneComponent } from './componentone/componentone.component';
import { ComtwoComponent } from './comtwo/comtwo.component';
import { ComthreeComponent } from './comthree/comthree.component';
import { DemopipeComponent } from './demopipe/demopipe.component';
import { CustpipesPipe } from './service/custpipes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentoneComponent,
    ComtwoComponent,
    ComthreeComponent,
    DemopipeComponent,
    CustpipesPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

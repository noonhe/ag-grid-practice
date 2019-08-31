import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AgGridModule} from 'ag-grid-angular';
import { MyGridComponent } from './my-grid/my-grid.component';
import { HttpClientModule } from '@angular/common/http';
import 'ag-grid-enterprise';
import { MyTooltipComponentComponent } from './my-grid/my-tooltip-component/my-tooltip-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyGridComponent,
    MyTooltipComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([MyTooltipComponentComponent]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

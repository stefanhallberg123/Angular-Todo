import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataserviceComponent } from './dataservice/dataservice.component';
import { PrintTodoComponent } from './print-todo/print-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    DataserviceComponent,
    PrintTodoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

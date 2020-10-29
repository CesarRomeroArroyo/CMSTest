import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './components/hello/hello.component';
import { WidgetModalComponent } from './components/widget-modal/widget-modal.component';
import { RenderModalComponent } from './components/render-modal/render-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WidgetModalComponent,
    RenderModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

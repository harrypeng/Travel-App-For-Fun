import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SiteTitleComponent } from './components/title_component';
import { ApiService } from './services/api_service';

@NgModule({
  declarations: [
    SiteTitleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ApiService],
  bootstrap: [SiteTitleComponent]
})
export class AppModule { }

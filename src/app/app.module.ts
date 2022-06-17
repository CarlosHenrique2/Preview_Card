import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PreviewcardModule } from 'src/component/previewcard.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, PreviewcardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

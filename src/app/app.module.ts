import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { TextComponent } from './text/text.component';
import { FooterComponent } from './footer/footer.component';

import { HotfixComponent } from './hotfix/hotfix.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    TextComponent,
    FooterComponent,
    HotfixComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

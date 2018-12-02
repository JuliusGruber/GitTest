import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
<<<<<<< HEAD
import { TextComponent } from './text/text.component';
import { FooterComponent } from './footer/footer.component';
=======
import { HotfixComponent } from './hotfix/hotfix.component';
>>>>>>> master

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
<<<<<<< HEAD
    TextComponent,
    FooterComponent
=======
    HotfixComponent
>>>>>>> master
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

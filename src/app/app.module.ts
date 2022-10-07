import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PommeComponent } from './pomme/pomme.component';
import { CageotPommeComponent } from './cageot-pomme/cageot-pomme.component';
import { TartePommeComponent } from './tarte-pomme/tarte-pomme.component';

@NgModule({
  declarations: [
    AppComponent,
    PommeComponent,
    CageotPommeComponent,
    TartePommeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

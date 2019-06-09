import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PalettesListComponent } from './palettes-list/palettes-list.component';
import { ColorsListComponent } from './colors-list/colors-list.component';
import { ActiveColorComponent } from './active-color/active-color.component';
import { PaneComponent } from './pane/pane.component';
import { SetupComponent } from './setup/setup.component';

@NgModule({
  declarations: [
    AppComponent,
    PalettesListComponent,
    ColorsListComponent,
    ActiveColorComponent,
    PaneComponent,
    SetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

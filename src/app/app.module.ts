import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ResourceCardModule } from '../resource-card/resource-card';
import { UpgradeCardModule } from '../upgrade-card/upgrade-card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MatButtonModule,
    ResourceCardModule,
    UpgradeCardModule,
    MatToolbarModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

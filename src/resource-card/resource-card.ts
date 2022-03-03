import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { ResourceCardComponent } from './resource-card.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [ResourceCardComponent],
  exports: [ResourceCardComponent],
})
export class ResourceCardModule {}

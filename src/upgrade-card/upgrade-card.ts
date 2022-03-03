import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

import { UpgradeCardComponent } from './upgrade-card.component';

@NgModule({
  imports: [CommonModule, MatButtonModule],
  declarations: [UpgradeCardComponent],
  exports: [UpgradeCardComponent],
})
export class UpgradeCardModule {}

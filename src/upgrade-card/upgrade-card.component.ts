import { Component, Input } from '@angular/core';
import { Player } from '../player/player';
import { Upgrade } from '../upgrade/upgrade';

@Component({
  selector: 'upgrade-card',
  templateUrl: './upgrade-card.component.html',
  styleUrls: ['./upgrade-card.component.css'],
})
export class UpgradeCardComponent {
  title = 'UpgradeCard';

  @Input() upgrade?: Upgrade;
  @Input() player?: Player;

  canBuy() {
    return !this.upgrade.active && this.player.coin >= this.upgrade.cost;
  }

  buyUpgrade() {
    console.log('Activating Upgrade');

    if (this.player.coin < this.upgrade.cost) {
      console.log('Insufficient funds!');
    } else {
      this.upgrade.active = true;
      this.player.coin -= this.upgrade.cost;
      this.player.step += this.upgrade.step;
    }
  }
}

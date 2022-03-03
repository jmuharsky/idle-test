import { Component, Input } from '@angular/core';
import { Player } from '../player/player';
import { Resource } from '../resource/resource';

@Component({
  selector: 'resource-card',
  templateUrl: './resource-card.component.html',
  styleUrls: ['./resource-card.component.css'],
})
export class ResourceCardComponent {
  title = 'ResourceCard';

  @Input() resource?: Resource;
  @Input() player?: Player;

  activateResource(resource) {
    console.log('Activating Resource');

    if (this.player.coin < resource.nextLevel) {
      console.log('Insufficient funds!');
    } else {
      resource.active = true;
      this.player.coin -= resource.nextLevel;
    }
  }
}

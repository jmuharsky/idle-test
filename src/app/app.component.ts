import { Component, OnInit, OnDestroy } from '@angular/core';

import { Player } from '../player/player';
import { Resource } from '../resource/resource';
import { Upgrade } from '../upgrade/upgrade';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'The Clicky Game';
  resources: Array<Resource> = [
    {
      name: 'Tin',
      value: 1,
      active: true,
      progress: 0,
      nextLevel: 3,
    },
    {
      name: 'Nickel',
      value: 10,
      progress: 0,
      nextLevel: 10,
    },
    {
      name: 'Lead',
      value: 100,
      progress: 0,
      nextLevel: 100,
    },
    {
      name: 'Zinc',
      value: 350,
      progress: 0,
      nextLevel: 1000,
    },
    {
      name: 'Copper',
      value: 1500,
      progress: 0,
      nextLevel: 5000,
    },
    {
      name: 'Aluminum',
      value: 20000,
      progress: 0,
      nextLevel: 50000,
    },
  ];

  upgrades: Array<Upgrade> = [
    {
      name: 'Pickaxe',
      step: 0.25,
      cost: 10,
    },
    {
      name: 'Drill',
      step: 1,
      cost: 100,
    },
    {
      name: 'Blasting Powder',
      step: 10,
      cost: 5000,
    },
  ];

  player: Player = {
    coin: 0,
    step: 0.01,
  };

  interval = 10;
  paused = true;
  lastCheck = 0;
  timeout: number;

  pause() {
    console.log('pause()');
    this.paused = true;

    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }

  unpause() {
    console.log('unpause()');
    this.paused = false;
    this.lastCheck = Date.now();

    this.fireGameLoop();
  }

  getPausedStyle() {
    if (this.paused) {
      return 'warn';
    } else {
      return 'accent';
    }
  }

  togglePause() {
    console.log('togglePause()');
    this.paused ? this.unpause() : this.pause();
  }

  fireGameLoop(context = this) {
    console.log('fireGameLoop()');
    if (context.paused) {
      return;
    }

    context.timeout = window.setTimeout(function () {
      context.updateResources(context);

      if (!context.paused) {
        context.fireGameLoop(context);
      }
    }, context.interval);
  }

  updateResources(context) {
    console.log('updateResouces(' + context.resources.length + ' resources)');
    for (let i = 0; i < context.resources.length; ++i) {
      let resource = context.resources[i];

      if (resource.active) {
        resource.progress += context.player.step;

        if (resource.progress >= resource.nextLevel) {
          context.player.coin += resource.value;
          resource.value++;
          resource.level++;
          resource.progress = 0;
        }
      }
    }
  }

  ngOnInit() {
    for (let resource of this.resources) {
      resource.level = 0;
      resource.progress = 0;
    }
  }

  ngOnDestroy() {
    if (this.timeout) {
      window.clearTimeout(this.timeout);
    }
  }
}

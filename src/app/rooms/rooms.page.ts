import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.page.html',
  styleUrls: ['./rooms.page.scss'],
})
export class RoomsPage {
  constructor(private popoverController: PopoverController) {}

  async presentPopover(event: Event) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event,
      translucent: true,
    });
    return await popover.present();
  }
}

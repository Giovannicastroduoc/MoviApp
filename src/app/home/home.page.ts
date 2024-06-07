import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PopoverController } from '@ionic/angular';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  currentUser: any;

  constructor(private authService: AuthService, private popoverController: PopoverController) {}

  ngOnInit() {
    this.currentUser = this.authService.getCurrentUser();
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
  }

  reloadPage() {
    window.location.reload();
  }
}

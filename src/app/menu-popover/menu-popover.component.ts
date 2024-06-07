import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu-popover',
  templateUrl: './menu-popover.component.html',
  styleUrls: ['./menu-popover.component.scss'],
})
export class MenuPopoverComponent {
  constructor(private router: Router, private popoverController: PopoverController) {}

  closePopover() {
    this.popoverController.dismiss();
  }

  onLogin() {
    this.router.navigate(['/login']).then(() => {
      this.closePopover();
    });
  }

  onRegister() {
    this.router.navigate(['/register']).then(() => {
      this.closePopover();
    });
  }
}

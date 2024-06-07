import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { MenuPopoverComponent } from '../menu-popover/menu-popover.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private popoverController: PopoverController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit() {}

  onLogin() {
    if (this.loginForm.valid) {
      const user = {
        name: 'Usuario Ejemplo', 
        email: this.loginForm.get('email')?.value
      };
      this.authService.login(user);
      this.router.navigate(['/home']).then(() => {
        window.location.reload();
      });
    }
  }

  reloadPage() {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MenuPopoverComponent,
      event: ev,
      translucent: true
    });
    await popover.present();
  }
}

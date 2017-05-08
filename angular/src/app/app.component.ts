import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { ComponentType, MdDialog, MdDialogRef } from '@angular/material';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SidenavService } from './sidenav/shared/sidenav.service';
import { WindowService } from './shared/windowService/windowService.service';
import { AuthService } from './shared/authentication/auth.service';

@Component({
  selector: 'public-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  mobileSidenavOpened: boolean = false;
  _window: Window;
  screenSize: string;

  constructor(public window: WindowService,
              private router: Router,
              private sidenav: SidenavService,
              public dialog: MdDialog,
              public auth: AuthService) {
    this._window = window.nativeWindow;
  }

  openCloseSideNav(sidenavOpened: boolean): void {
    sidenavOpened ? this.sidenav.closeSideNav() : this.sidenav.openSideNav();
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
    this.mobileSidenavOpened = false;
  }

  openLoginDialog(): void {
    this._window.innerWidth > 800 ? this.screenSize = '40%' : this.screenSize = '80%';
    let dialogRef: MdDialogRef<LoginDialogComponent> = this.dialog.open(LoginDialogComponent, {
      width: this.screenSize,
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        if (result.email) {
          this.auth.register(result.username, result.password, result.email);
        } else {
          this.auth.login(result.username, result.password);
          this.router.navigate(['orders']);
        }
      }
    });
  }

  logout(): void {
    this.auth.logout();
    this.router.navigate(['restaurant']);
  }
}

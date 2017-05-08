import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CovalentCoreModule } from '@covalent/core';

import { SidenavService } from './sidenav/shared/sidenav.service';
import { WindowService } from './shared/windowService/windowService.service';
import { LoginDataService } from './shared/backend/login/login-data-service';
import { AuthService } from './shared/authentication/auth.service';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavOrderComponent } from './sidenav/sidenav-order/sidenav-order.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, SidenavComponent, SidenavOrderComponent ],
      providers: [SidenavService, WindowService, AuthService, LoginDataService],
      imports: [
        RouterTestingModule,
        CovalentCoreModule.forRoot(),
      ],
    });
    TestBed.compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

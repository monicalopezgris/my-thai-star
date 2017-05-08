// MODULES
import { MaterialModule } from '@angular/material';
import { NgModule, Type } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentChipsModule, CovalentCoreModule } from '@covalent/core';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';
import { HttpModule, XHRBackend, RequestOptions, Http, BaseRequestOptions } from '@angular/http';
import { MockBackend } from '@angular/http/testing';
import { Md2Module }  from 'md2';
import { BackendModule } from './shared/backend/backend.module';

// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './app.routes';
import { BookTableComponent } from './book-table/book-table.component';
import { MenuComponent } from './menu/menu.component';
import { MenuCardComponent } from './menu/menu-card/menu-card.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavOrderComponent } from './sidenav/sidenav-order/sidenav-order.component';
import { InvitationDialogComponent } from './book-table/invitation-dialog/invitation-dialog.component';
import { BookTableDialogComponent } from './book-table/book-table-dialog/book-table-dialog.component';
import { CommentDialogComponent } from './sidenav/comment-dialog/comment-dialog.component';

// SERVICES
import { SidenavService } from './sidenav/shared/sidenav.service';
import { PriceCalculatorService } from './sidenav/shared/price-calculator.service';
import { BookTableService } from './book-table/shared/book-table.service';
import { MenuService } from './menu/shared/menu.service';
import { WindowService } from './shared/windowService/windowService.service';
import { AuthGuard } from './shared/authentication/auth-guard.service';
import { AuthService } from './shared/authentication/auth.service';

// BACKEND
import { backendProvider } from './shared/backend/mock-backend';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { OrderCockpitComponent } from './order-cockpit/order-cockpit.component';
import { ReservationCockpitComponent } from './reservation-cockpit/reservation-cockpit.component';

// Remark: Imho it would be nice if app module consists mainly from other modules imports. e.g.:
// https://github.com/devonfw/devonfw-it-survival/blob/final-extras/app/app.module.ts

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BookTableComponent,
    MenuComponent,
    MenuCardComponent,
    SidenavComponent,
    SidenavOrderComponent,
    InvitationDialogComponent,
    BookTableDialogComponent,
    CommentDialogComponent,
    LoginDialogComponent,
    OrderCockpitComponent,
    ReservationCockpitComponent,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    CovalentCoreModule.forRoot(),
    appRoutes,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    Md2Module,
    BackendModule,
  ],
  providers: [
    SidenavService, // TODO: Seaprate module for side nav that exports this provider
    PriceCalculatorService, // TODO: Seaprate module for side nav that exports this provider
    BookTableService,
    MenuService,
    backendProvider,
    MockBackend,
    BaseRequestOptions,
    WindowService,
    AuthGuard,
    AuthService,
  ],
  entryComponents: [
    BookTableDialogComponent,
    InvitationDialogComponent,
    CommentDialogComponent,
    LoginDialogComponent,
  ],
  bootstrap: [ AppComponent ],
})
export class AppModule { }

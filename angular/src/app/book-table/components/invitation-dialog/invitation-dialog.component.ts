import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import * as moment from 'moment';
import { BookTableService } from 'app/book-table/services/book-table.service';
import * as fromApp from 'app/store/reducers';
import { Store } from '@ngrx/store';
import { InviteFriends } from 'app/book-table/store/actions/book-table.actions';

@Component({
  selector: 'public-invitation-dialog',
  templateUrl: './invitation-dialog.component.html',
  styleUrls: ['./invitation-dialog.component.scss'],
})
export class InvitationDialogComponent implements OnInit {
  data: any;
  date: string;

  constructor(
    private invitationService: BookTableService,
    private store: Store<fromApp.State>,
    private dialog: MatDialogRef<InvitationDialogComponent>,
    @Inject(MAT_DIALOG_DATA) dialogData: any,
  ) {
    this.data = dialogData;
  }

  ngOnInit(): void {
    this.date = moment(this.data.bookingDate).format('LLL');
  }

  sendInvitation(): void {
    this.store.dispatch(
      new InviteFriends(this.invitationService.composeBooking(this.data, 1)),
    );
    this.dialog.close(true);
  }
}

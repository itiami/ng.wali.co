import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { PopupContentComponent } from '../popup-content/popup-content.component';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  providers: []
})
export class PopupComponent {

  expression: boolean = false;

  constructor(
    private _snackBar: MatSnackBar,
    private matDialog: MatDialog
  ) { }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


  openDialog(): void {
    const dialogRef = this.matDialog.open(PopupContentComponent, {
      // configuration like width: '250px',
      data: {
        firstName: "Numan"
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log("dialogRef.afterClosed().subscribe(result): ", result);

      } else {
        // Cancel was clicked
        console.log("afterClosed(): ", 'clicked outside');
      }
    });
  }
}

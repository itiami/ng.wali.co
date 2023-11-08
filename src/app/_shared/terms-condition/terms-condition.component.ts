// terms-condition.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-terms-condition',
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
})
export class TermsConditionComponent {
  constructor(private dialogRef: MatDialogRef<TermsConditionComponent>) { }

  onOk() {
    this.dialogRef.close('Ok clicked');
  }

  onCancel() {
    this.dialogRef.close('Cancel clicked');
  }
}

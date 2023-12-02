import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-content',
  templateUrl: './popup-content.component.html',
  styleUrls: ['./popup-content.component.css']
})
export class PopupContentComponent implements OnInit {


  constructor(
    private matDialogRef: MatDialogRef<PopupContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { };

  ngOnInit(): void {

  }


  dialogOK() {
    this.matDialogRef.close(this.data);
    console.log("dialogOK(): ..... ", this.data);
  }

  dialogCancel() {
    console.log("Cancelled...");
    this.matDialogRef.close();
  }
}

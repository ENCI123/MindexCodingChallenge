import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

@Component({
  selector: "app-employee-dialog",
  templateUrl: "./employee-dialog.component.html",
})
export class EmployeeDialogComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<EmployeeDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit() {}

  //handle delete  button click
  deleteReporter(reporter: any, editDelete: String) {
    this.dialogRef.close({ ...reporter, editDelete });
  }

  //handle edit save buton click
  updateEmployeeCompensation(
    reporter: any,
    newCompensation: number,
    editDelete: String
  ) {
    reporter.compensation = newCompensation;
    this.dialogRef.close({ ...reporter, editDelete });
  }
}

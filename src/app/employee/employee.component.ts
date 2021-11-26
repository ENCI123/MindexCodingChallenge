import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { Employee } from "../employee";
import { MatDialog } from "@angular/material/dialog";
import { EmployeeDialogComponent } from "../employee-dialog/employee-dialog.component";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  //Emitters share data between employee and employeeList
  @Output() delete = new EventEmitter();
  @Output() updateCompensation = new EventEmitter();

  employeesList: Employee[] = [];
  dirReports: object[] = [];

  constructor(
    private dialog: MatDialog,
    private employeeList: EmployeeListComponent
  ) {}

  //get detailed direc reporters info
  ngOnInit(): void {
    this.employeesList = this.employeeList.employees;
    this.get_dir_report_names();
  }

  //display dialog when edit or delete button is clicked
  openDialog(employee: any, reporter: any, editDelete: string): void {
    const dialogRef = this.dialog.open(EmployeeDialogComponent, {
      data: { reporter, editDelete },
    });

    dialogRef.afterClosed().subscribe((reporter) => {
      if (reporter.editDelete == "delete") {
        this.deleteDirectReporter(reporter);
      } else if (reporter.editDelete == "edit") {
        this.updateDirectReporterCompensation(reporter);
      }
    });
  }

  //helper function to handle delete
  deleteDirectReporter(reporter) {
    if (this.employee.directReports.includes(reporter.id)) {
      const idx = this.employee.directReports.indexOf(reporter.id);
      this.employee.directReports.splice(idx, 1);
      //send updated employee object
      this.delete.emit(this.employee);
    }
  }
  //helper function to handle edit
  updateDirectReporterCompensation(reporter) {
    if (this.employee.directReports.includes(reporter.id)) {
      //send updated employee object
      this.updateCompensation.emit(reporter);
    }
  }

  // use to get the detail information of reporters
  get_dir_report_names() {
    let id = this.employee.id;
    let reports = this.employee.directReports;
    if (!!reports) {
      for (let i = 0; i < reports.length; i++) {
        for (let j = 0; j < this.employeesList.length; j++) {
          if (reports[i] == this.employeesList[j].id) {
            this.dirReports.push({
              id: this.employeesList[j].id,
              firstName: this.employeesList[j].firstName,
              lastName: this.employeesList[j].lastName,
              position: this.employeesList[j].position,
              directReports: this.employeesList[j].directReports,
              compensation: this.employeesList[j].compensation,
            });
          }
        }
      }
    }
  }
}

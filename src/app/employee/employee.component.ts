import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { EmployeeListComponent } from "../employee-list/employee-list.component";
import { Employee } from "../employee";
import { MatDialog } from "@angular/material/dialog";
import { EmployeeDialogComponent } from "../employee-dialog/employee-dialog.component";
import { Direct } from "protractor/built/driverProviders";
@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"],
})
export class EmployeeComponent implements OnInit {
  @Input() employee: Employee;
  @Output() delete = new EventEmitter();
  @Output() updateCompensation = new EventEmitter();
  //array to store all retrieved employee data
  employeesList: Employee[] = [];
  dirReports: object[] = [];

  constructor(
    private dialog: MatDialog,
    private employeeList: EmployeeListComponent
  ) {}

  //initialize
  ngOnInit(): void {
    this.employeesList = this.employeeList.employees;
    this.get_dir_report_names();
  }

  openDialog(employee: any, reporter: any, editDelete: string): void {
    // console.log(employee);
    // console.log(reporter);
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

  deleteDirectReporter(reporter) {
    if (this.employee.directReports.includes(reporter.id)) {
      const idx = this.employee.directReports.indexOf(reporter.id);
      this.employee.directReports.splice(idx, 1);
      //send updated employee object
      this.delete.emit(this.employee);
    }
  }
  updateDirectReporterCompensation(reporter) {
    if (this.employee.directReports.includes(reporter.id)) {
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

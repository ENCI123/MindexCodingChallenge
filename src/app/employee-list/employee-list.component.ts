import { Component, OnInit, Input } from "@angular/core";
import { catchError, map, reduce } from "rxjs/operators";
import { Employee } from "../employee";
import { EmployeeService } from "../employee.service";
import { MatDialog } from "@angular/material/dialog";
import { EmployeeDialogComponent } from "../employee-dialog/employee-dialog.component";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  errorMessage: string;
  temp: Object;

  constructor(
    private dialog: MatDialog,
    private employeeService: EmployeeService
  ) {}

  ngOnInit(): void {
    this.employeeService
      .getAll()
      .pipe(
        reduce((emps, e: Employee) => emps.concat(e), []),
        map((emps) => (this.employees = emps)),
        catchError(this.handleError.bind(this))
      )
      .subscribe();
  }
  getAllEmployees() {
    this.employeeService
      .getAll()
      .pipe(
        reduce((emps, e: Employee) => emps.concat(e), []),
        map((emps) => (this.employees = emps)),
        catchError(this.handleError.bind(this))
      )
      .subscribe();
  }

  handleDeleteRequest(employee) {
    this.employeeService
      .save(employee)
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe(() => {
        const editDelete = "deleted";
        // open delete confirmation dialog after successfull delete
        this.dialog.open(EmployeeDialogComponent, {
          data: { ...employee, editDelete },
        });
        //get the updated data after service call
        setTimeout(() => this.dialog.closeAll(), 880);
        this.getAllEmployees();
      });
  }
  async handleEditRequest(employee) {
    this.employeeService
      .save(employee)
      .pipe(catchError(this.handleError.bind(this)))
      .subscribe(() => {
        const editDelete = "editted";
        // open delete confirmation dialog after successfull delete
        this.dialog.open(EmployeeDialogComponent, {
          data: { ...employee, editDelete },
        });
        //get the updated data after service call
        setTimeout(() => this.dialog.closeAll(), 880);
        this.getAllEmployees();
      });
  }

  private handleError(e: Error | any): string {
    console.error(e);
    return (this.errorMessage = e.message || "Unable to retrieve employees");
  }
}

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  id: number = 0;
  employee: Employee | undefined;

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    // Get the employee ID from the route
    this.id = this.route.snapshot.params['id'];

    // Fetch employee details to display before deletion
    this.employeeService.getEmployeeById(this.id).subscribe(data => {
      this.employee = data;
    }, error => console.error(error));
  }

  confirmDelete(): void {
    // Call delete method from EmployeeService
    this.employeeService.deleteEmployee(this.id).subscribe(data => {
      console.log('Employee deleted successfully');
      this.router.navigate(['/employees']);  // Redirect to employee list
    }, error => console.error(error));
  }

  cancel(): void {
    this.router.navigate(['/employees']);  // Cancel and navigate back
  }
}

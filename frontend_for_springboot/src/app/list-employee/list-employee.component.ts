import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent {

  employees:Employee[]=[];

  constructor(private employeeService:EmployeeService,private router:Router){}

  ngOnInit():void{
    
    this.getEmployees();
    

  }

  private getEmployees(){
 this.employeeService.getEmployeeList().subscribe(data=>{
  this.employees=data;
 })

  }
updateEmployee(id:number){

  this.router.navigate(['update-employee',id]);

}
deleteEmployee(id: number): void {
  this.router.navigate([`/delete-employee`, id]);
}
viewEmployee(id:number){
  this.router.navigate(['employee-details', id]);
}


}

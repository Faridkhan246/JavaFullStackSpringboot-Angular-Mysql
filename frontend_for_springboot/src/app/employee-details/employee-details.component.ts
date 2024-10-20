import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {

  id:number=0;
  employee:Employee=new Employee();
  constructor(private employeeService:EmployeeService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit():void{
    this.id=this.route.snapshot.params['id'];
    this.employeeService.getEmployeeById(this.id).subscribe(data=>{

    
      this.employee=data;
   }   )
  }

}

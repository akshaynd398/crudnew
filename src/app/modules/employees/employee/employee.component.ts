import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
import { Employee } from 'src/app/model/employee.model';
import { Observable } from 'rxjs';
import { text } from '@angular/core/src/render3/instructions';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService, AlertService } from 'src/app/_services';
import { pipe } from '@angular/core/src/render3/pipe';
import { first } from 'rxjs/operators';


// import { get } from 'http';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  
})
export class EmployeeComponent implements OnInit {

  employeeform : FormGroup;
  loading = false;
  submitted = false;
  btn: any;
  save: string;
  EmployeeService: any;

  constructor(private employeeService: EmployeeService,
    
    private formbuilder : FormBuilder,
    private router : Router,
    private userService : UserService,
    private alertService : AlertService,
    private toastr : ToastrService


    
    ) {}   

  ngOnInit() {

this.employeeform = this.formbuilder.group({

    firstName : ['', Validators.required],
    lastName : ['',Validators.required]

});
      
  
    
  }
  get f() {
    return this.employeeform.controls;
  }


  Save()
  {
      this.submitted=true;

      // stop here if employee form is invalid
      if(this.employeeform.invalid)
      {

         return
      }

      this.loading=true;
      this.employeeService.getAllEmployees;
      //this.employeeService.getAllEmployess(this.employeeform.value);
      
   

      // .subscribe(
      //   data => {
      //       this.toastr.success(' Successful entry!!');

      //      // this.alertService.success('Registration successful', true);
      //       this.router.navigate(['/login']);
      //   },
      //   error => {
      //       this.alertService.error(error);
      //       this.loading = false;
      //   });
}

    
createAndUpdate(currentEmployee: Employee){
     
 
    console.log(currentEmployee);

    

    if (currentEmployee.id !=null)
    {
    this.updateEmployee(currentEmployee);
  }
  else {
    
  this.createEmployee(currentEmployee);
}

  }

   




  //whenever click on edit data dispalyed in input
  createEmployee(emp: Employee){
 
    
  this.employeeService.createEmployee(emp).subscribe();
 
  }
updateEmployee(emp: Employee){
  this.employeeService.updateEmployee(emp).subscribe();
}
clear(){
  this.employeeService.currentEmployee={
    id:null,
    firstname:"",
    lastname:"",
    designation:"",
    contact:null,
    address:"" ,
    emailaddress:""
  }
}


}



//to add new employee
// createAndUpdate(currentEmployee: Employee ,isFromEdit){

  // if(isFromEdit==true)
  // {

  //    this.save="update";
  // }
  // //  element.textContent = "update";
  // //  element.disabled = true;

  
  




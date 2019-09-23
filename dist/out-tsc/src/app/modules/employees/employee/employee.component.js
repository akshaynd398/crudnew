var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeComponent.prototype.ngOnInit = function () {
    };
    //to add new employee
    EmployeeComponent.prototype.createAndUpdate = function (currentEmployee) {
        console.log(currentEmployee);
        if (currentEmployee.id != null) {
            this.updateEmployee(currentEmployee);
        }
        else {
            this.createEmployee(currentEmployee);
        }
    };
    //whenever click on edit data dispalyed in input
    EmployeeComponent.prototype.createEmployee = function (emp) {
        this.employeeService.createEmployee(emp).subscribe();
    };
    EmployeeComponent.prototype.updateEmployee = function (emp) {
        this.employeeService.updateEmployee(emp).subscribe();
    };
    EmployeeComponent.prototype.clear = function () {
        this.employeeService.currentEmployee = {
            id: null,
            firstname: "",
            lastname: "",
            designation: "",
            contact: null,
            address: "",
            emailaddress: ""
        };
    };
    EmployeeComponent = __decorate([
        Component({
            selector: 'app-employee',
            templateUrl: './employee.component.html',
            styleUrls: ['./employee.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
export { EmployeeComponent };
//# sourceMappingURL=employee.component.js.map
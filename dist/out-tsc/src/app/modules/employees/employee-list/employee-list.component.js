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
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(employeeService) {
        this.employeeService = employeeService;
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.getAllEmployee();
        this.width != 30;
    };
    EmployeeListComponent.prototype.getAllEmployee = function () {
        var _this = this;
        this.employeeService.getAllEmployees().subscribe(function (data) {
            _this.allEmployee = data;
            _this.getAllEmployee();
        });
    };
    // to edit the employee details on left side component. 
    EmployeeListComponent.prototype.edit = function (emp) {
        this.employeeService.currentEmployee = Object.assign({}, emp);
    };
    //to delete the employee .. 
    EmployeeListComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteEmployee(id).subscribe(function (data) {
            _this.getAllEmployee();
        });
    };
    EmployeeListComponent = __decorate([
        Component({
            selector: 'app-employee-list',
            templateUrl: './employee-list.component.html',
            styleUrls: ['./employee-list.component.css']
        }),
        __metadata("design:paramtypes", [EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
export { EmployeeListComponent };
//# sourceMappingURL=employee-list.component.js.map
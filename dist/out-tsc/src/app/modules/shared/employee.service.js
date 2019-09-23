var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
var headerOption = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
};
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.mockUrl = "http://localhost:3000/Employee";
        this.currentEmployee = {
            id: null,
            firstname: "",
            lastname: "",
            designation: "",
            contact: null,
            address: "",
            emailaddress: "",
        };
    }
    EmployeeService.prototype.getAllEmployees = function () {
        return this.http.get(this.mockUrl, headerOption);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.mockUrl + '/' + id, headerOption);
    };
    EmployeeService.prototype.createEmployee = function (emp) {
        return this.http.post(this.mockUrl, emp, headerOption);
    };
    EmployeeService.prototype.updateEmployee = function (emp) {
        return this.http.put(this.mockUrl + '/' + emp.id, emp, headerOption);
    };
    EmployeeService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
export { EmployeeService };
//# sourceMappingURL=employee.service.js.map
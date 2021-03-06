"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("../service/employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = 'All';
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployees().subscribe(function (employeeData) { return _this.employees = employeeData; }, function (error) {
            _this.statusMessage = 'Service issue please try again...';
            console.error(error);
        });
    };
    //getEmployees() {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/10/1980' },
    //        { code: 'emp105', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/10/1980' },
    //    ];
    //}
    EmployeeListComponent.prototype.onEmployeeCountRadioButton = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFemaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'list-employee',
            templateUrl: 'app/employeeList/employeeList.component.html',
            styleUrls: ['app/employeeList/employeeList.component.css']
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=EmployeeList.component.js.map
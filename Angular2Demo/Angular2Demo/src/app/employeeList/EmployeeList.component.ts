import { Component, OnInit } from '@angular/core';
import { IEmployee } from '../employee/Employee';
import { EmployeeService } from '../service/employee.service'

@Component({
    selector: 'list-employee',
    templateUrl: 'app/employeeList/employeeList.component.html',
    styleUrls: ['app/employeeList/employeeList.component.css']
})

export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    statusMessage: string;

    constructor(private _employeeService: EmployeeService) {

    }
    ngOnInit() {
        this._employeeService.getEmployees().subscribe(employeeData => this.employees = employeeData,
            (error) => {
                this.statusMessage = 'Service issue please try again...'
                console.error(error);
            });
    }

    //getEmployees() {
    //    this.employees = [
    //        { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
    //        { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
    //        { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
    //        { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/10/1980' },
    //        { code: 'emp105', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/10/1980' },
    //    ];
    //}

    onEmployeeCountRadioButton(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }
    getTotalEmployeeCount(): number {
        return this.employees.length;
    }
    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }
    getTotalFemaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }
}
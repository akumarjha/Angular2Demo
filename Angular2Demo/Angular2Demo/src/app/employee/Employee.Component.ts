import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/retryWhen';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/delay';
import { ISubscription } from 'rxjs/Subscription';



import { IEmployee } from './Employee';
import { EmployeeService } from '../service/employee.service';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/Employee.Component.html',
    styleUrls: ['app/employee/Employee.Component.css']
})
export class EmployeeComponent implements OnInit {
    //colSpan: number = 2;
    //firstName: string = "Tom";
    //lastName: string = "Hopkins";
    //gender: string = "Male";
    //age: number = 28;
    showDetails: boolean = false;
    subscription: ISubscription;

    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }

    employee: IEmployee;
    status: string;
    constructor(private _employeeService: EmployeeService,
        private _activatedRoute: ActivatedRoute,
        private _router: Router) {

    }
    onBackButtonClick(): void{
        this._router.navigate(['/employee']);
    }
    onCancelButtonClick(): void {
        this.status = 'Request Cancelled..';
        let empCode = this._activatedRoute.snapshot.params['code'];
        this.subscription.unsubscribe();
    }
    ngOnInit() {
        let empCode = this._activatedRoute.snapshot.params['code'];
        this.subscription = this._employeeService.getEmployeeByCode(empCode).retryWhen((err) => {
            return err.scan((retryCount) => {
                retryCount += 1;
                if (retryCount < 6) {
                    this.status = 'Retrying Attempt..#' + retryCount;
                    return retryCount;
                }
                else {
                    throw (err);
                }
            }, 0).delay(1000)
        })
            .subscribe(
            (employeeData) => {
                if (employeeData == null) {
                    this.status = 'There is no employee exists with empCode:' + empCode
                }
                else {
                    this.employee = employeeData
                }
            },
            (error) => {
                this.status = 'Problem with service please try again...';
                console.log(error);
            }
        );
    }

}
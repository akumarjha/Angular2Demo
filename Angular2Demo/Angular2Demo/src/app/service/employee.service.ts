import { Injectable } from '@angular/core';
import { IEmployee } from '../employee/Employee';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {

    constructor(private _http: Http) {

    }
    getEmployees(): Observable<IEmployee[]> {
        //return [
        //    { code: 'emp101', name: 'Tom', gender: 'Male', annualSalary: 5500, dateOfBirth: '6/25/1988' },
        //    { code: 'emp102', name: 'Alex', gender: 'Male', annualSalary: 5700.95, dateOfBirth: '9/6/1982' },
        //    { code: 'emp103', name: 'Mike', gender: 'Male', annualSalary: 5900, dateOfBirth: '12/8/1979' },
        //    { code: 'emp104', name: 'Mary', gender: 'Female', annualSalary: 6500.826, dateOfBirth: '10/14/1980' },
        //];
        return this._http.get("http://localhost:63300/api/employee")
            .map((response: Response) => <IEmployee[]>response.json())
            .catch(this.handleError);
    }
    getEmployeeByCode(empCode: string): Observable<IEmployee> {
        return this._http.get("http://localhost:63300/api/employee/" + empCode)
            .map((response: Response) => <IEmployee>response.json()).catch(this.handleError);
    }

    handleError(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
    handlePromiseError(error: Response) {
        console.error(error);
         throw(error);
    }
}
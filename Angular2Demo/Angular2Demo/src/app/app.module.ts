import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/Employee.Component';
import { EmployeeListComponent } from './employeeList/EmployeeList.component';
import { EmployeeTitlePipe } from './customPipe/EmployeeTitle.Pipe';
import { EmployeeCountComponent } from './employeeCount/EmployeeCount.component';
import { SimpleComponent } from './other/SimpleComponent';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './other/pageNotFound.component';
import { EmployeeService } from './service/employee.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'employee', component: EmployeeListComponent },
    { path: 'employee/:code', component: EmployeeComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent } 
];

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(appRoutes)],
    declarations: [AppComponent, EmployeeComponent, EmployeeListComponent,
        EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent, HomeComponent, PageNotFoundComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService]
})
export class AppModule { }

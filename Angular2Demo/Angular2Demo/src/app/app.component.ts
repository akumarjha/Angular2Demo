import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
    template: `<h1>
                    <!--<my-employee></my-employee>
                    Name: <input [(ngModel)] ='name'>
                    Name: <input [value] ='name' (input) ='name=$event.target.value'/>
                    <br/>
                    You entered:{{name}}
                    <br/>
                    <br/>
                    Your Text :<input type ='text' [(ngModel)] ='userText'/>
                    <br/>
                    <simple [simpleInput] ='userText'></simple>
                    <list-employee></list-employee>-->
                  <div style="padding:5px">
                      <ul class="nav nav-tabs">
                          <li><a routerLink="home">Home</a></li>
                          <li><a routerLink="employee">Employee</a></li>
                      </ul>
                  </div>
                  <router-outlet></router-outlet>
                </h1>`
})
export class AppComponent  {
    pageHeader: string = 'Employee Details';
    name: string = 'Ashutosh';
    classesToApply: string = 'italicClass boldClass';
    isBold: boolean = false;
    fontSize: number = 30;
    isItalic: boolean = true;
    userText: string = 'Alok';

    addStyle() {
        let styles = {
            'font-weight': this.isBold ? 'bold' : 'noramal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    }
    onClick(): void {
        console.log('button Clicked');
        alert('btn clicked');
    }
}

"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.pageHeader = 'Employee Details';
        this.name = 'Ashutosh';
        this.classesToApply = 'italicClass boldClass';
        this.isBold = false;
        this.fontSize = 30;
        this.isItalic = true;
        this.userText = 'Alok';
    }
    AppComponent.prototype.addStyle = function () {
        var styles = {
            'font-weight': this.isBold ? 'bold' : 'noramal',
            'font-style': this.isItalic ? 'italic' : 'normal',
            'font-size.px': this.fontSize
        };
        return styles;
    };
    AppComponent.prototype.onClick = function () {
        console.log('button Clicked');
        alert('btn clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>\n                    <!--<my-employee></my-employee>\n                    Name: <input [(ngModel)] ='name'>\n                    Name: <input [value] ='name' (input) ='name=$event.target.value'/>\n                    <br/>\n                    You entered:{{name}}\n                    <br/>\n                    <br/>\n                    Your Text :<input type ='text' [(ngModel)] ='userText'/>\n                    <br/>\n                    <simple [simpleInput] ='userText'></simple>\n                    <list-employee></list-employee>-->\n                  <div style=\"padding:5px\">\n                      <ul class=\"nav nav-tabs\">\n                          <li><a routerLink=\"home\">Home</a></li>\n                          <li><a routerLink=\"employee\">Employee</a></li>\n                      </ul>\n                  </div>\n                  <router-outlet></router-outlet>\n                </h1>"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
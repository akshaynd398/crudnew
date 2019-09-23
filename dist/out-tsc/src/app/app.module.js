var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EmployeesModule } from './modules/employees/employees.module';
import { fakeBackendProvider } from './_helpers';
import { AlertComponent } from './_directives';
import { AuthGuard } from './_guards';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { PageComponent } from './page/page.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AlertService, AuthenticationService, UserService } from './_services';
import { RegisterComponent } from './register';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import{NgProgressModule} from 'ngx-progressbar';
// import { ProgressbarModule } from 'ngx-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { EmployeeComponent } from './modules/employees/employee/employee.component';
import { EmployeeListComponent } from './modules/employees/employee-list/employee-list.component';
import { ProgressBarModule } from "angular-progress-bar";
import { APP_BASE_HREF } from '@angular/common';
var routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    //{path:'home',component:HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'employee', component: EmployeeComponent },
    { path: 'employee-list', component: EmployeeListComponent },
    { path: '**', redirectTo: '' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                HomeComponent,
                PageComponent,
                LoginComponent,
                AlertComponent,
                RegisterComponent,
                AboutComponent,
                ContactComponent
            ],
            imports: [
                ReactiveFormsModule,
                BrowserModule,
                EmployeesModule,
                HttpClientModule,
                FormsModule,
                RouterModule.forRoot(routes),
                CommonModule,
                BrowserAnimationsModule,
                ToastrModule.forRoot({
                    timeOut: 1000,
                    positionClass: 'toast-bottom-center',
                    preventDuplicates: false
                }),
                NgxUiLoaderModule,
                ProgressBarModule
            ],
            providers: [AuthGuard,
                UserService,
                { provide: APP_BASE_HREF, useValue: '' },
                AlertService,
                AuthenticationService,
                UserService,
                { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
                { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
                fakeBackendProvider
            ],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map
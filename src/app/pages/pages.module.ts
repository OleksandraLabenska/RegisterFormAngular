import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        HomeComponent,
        LoginComponent

    ],
    imports: [
        CommonModule, 
        FormsModule,
        ReactiveFormsModule
    ],
    exports: [

    ],
    providers: []
})

export class PagesModule{}
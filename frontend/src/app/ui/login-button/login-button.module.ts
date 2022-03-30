import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoginButtonComponent } from './login-button.component';

@NgModule({
    declarations: [LoginButtonComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [LoginButtonComponent]
})
export class LoginButtonModule {
}

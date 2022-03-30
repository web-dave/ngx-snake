import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LogoutButtonComponent } from './logout-button.component';

@NgModule({
    declarations: [LogoutButtonComponent],
    imports: [CommonModule, MatButtonModule],
    exports: [LogoutButtonComponent]
})
export class LogoutButtonModule {
}

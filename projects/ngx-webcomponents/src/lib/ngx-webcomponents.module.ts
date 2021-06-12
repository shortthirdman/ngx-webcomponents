import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputCounterComponent } from './components/input-counter/input-counter.component';
import { CheckboxListComponent } from './components/checkbox-list/checkbox-list.component';

import { AnchorLinkPipe } from './pipes/anchor-link.pipe';
import { PasswordPipe } from './pipes/password.pipe';

import { AllowNumericDirective } from './directives/allow-numeric.directive';
import { AllowAlphaNumericDirective } from './directives/allow-alphanumeric.directive';

@NgModule({
  declarations: [
    InputCounterComponent,
    AnchorLinkPipe,
	PasswordPipe,
    AllowNumericDirective,
    AllowAlphaNumericDirective,
    CheckboxListComponent
  ],
  imports: [
	CommonModule,
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	InputCounterComponent,
	AnchorLinkPipe,
	PasswordPipe,
    AllowNumericDirective,
    AllowAlphaNumericDirective,
    CheckboxListComponent
  ]
})
export class NgxWebComponentsModule { }

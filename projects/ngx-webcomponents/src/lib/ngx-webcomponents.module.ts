import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputCounterComponent } from './components/input-counter/input-counter.component';

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
    AllowAlphaNumericDirective
  ],
  imports: [
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	InputCounterComponent,
	AnchorLinkPipe,
	PasswordPipe,
    AllowNumericDirective,
    AllowAlphaNumericDirective
  ]
})
export class NgxWebComponentsModule { }

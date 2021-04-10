import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { InputCounterComponent } from './components/input-counter/input-counter.component';

import { AnchorLinkPipe } from './pipes/anchor-link.pipe';

import { AllowNumericDirective } from './directives/allow-numeric.directive';
import { AllowAlphanumericDirective } from './directives/allow-alphanumeric.directive';

@NgModule({
  declarations: [
    InputCounterComponent,
    AnchorLinkPipe,
    AllowNumericDirective,
    AllowAlphanumericDirective
  ],
  imports: [
	FormsModule,
	ReactiveFormsModule
  ],
  exports: [
	InputCounterComponent,
	AnchorLinkPipe,
    AllowNumericDirective,
    AllowAlphanumericDirective
  ]
})
export class NgxWebComponentsModule { }

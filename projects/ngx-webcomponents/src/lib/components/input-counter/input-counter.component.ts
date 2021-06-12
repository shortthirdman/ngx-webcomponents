import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';
import { ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'wui-inputcounter',
  template: `
	  <div class="wui">
		  <label class="field">
			  <input id= "wuiInput" class="field__input" [(ngModel)]="textValue" type="text" placeholder="{{ placeholderText }}" maxlength="maxLength"
			  	(input)="onInputChange($event)">
			  <span class="field__counter">{{ remainingChars }}</span>
		  </label>
	  </div>
  `,
  styleUrls: ['./input-counter.component.css']
})
export class InputCounterComponent implements OnInit, AfterViewInit {

  @Input() textValue: string = "";
  @Input() maxLength: number = 50;
  @Input() placeholderText: string = "";
  @Input() isReadonly: boolean = false;
  remainingChars: number;
  @ViewChild('wuiInput', { static: false }) input: HTMLInputElement = new HTMLInputElement();

  constructor(private el: ElementRef) {
	this.remainingChars = this.maxLength;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
	this.input.readOnly = this.isReadonly;
  }

  @HostListener('document:input', ['$event'])
  onInputChange(event: Event) {
  	if ((<HTMLInputElement>event.target).value.length > 0) {
  		const valueLength = (<HTMLInputElement>event.target).value.length;
  		const leftCharLength = this.maxLength - valueLength;
  		if (leftCharLength < 0) return;
  		this.remainingChars = leftCharLength;
  	}
  }
}

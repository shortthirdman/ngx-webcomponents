import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, ViewChild } from '@angular/core';

@Component({
  selector: 'wui-inputcounter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.css']
})
export class InputCounterComponent implements OnInit, OnChanges {

  @Input() textValue: string = "";
  @Input() maxLength: number = 20;
  @Input() placeholderText: string = "";
  //@ViewChild('inpctr', { static: true }) inputField: HTMLInputElement = new HTMLInputElement();

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) : void {
	
  }
  
  onInputChange(event: Event) {
	// const input = document.querySelector('input.field__input');
	// const counter = document.querySelector('span.field__counter');
	// const maxLength = this.inputField.getAttribute('maxlength');

	// counter.innerText = this.maxLength;

	// input.addEventListener('input', event => {
		// const valueLength = event.target.value.length;
		// const leftCharLength = maxLength - valueLength;
		
		// if (leftCharLength < 0) return;
		// counter.innerText = leftCharLength;
	// });
  }
}

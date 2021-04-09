import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-input-counter',
  templateUrl: './input-counter.component.html',
  styleUrls: ['./input-counter.component.css']
})
export class InputCounterComponent implements OnInit, OnChanges {

  @Input() textValue = null;
  @Input() maxLength = 20;
  @Input() placeholder = "";

  constructor() { }

  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges) : void {
	
  }
  
  onInputChange() {
	const input = document.querySelector('input.field__input');
	const counter = document.querySelector('span.field__counter');
	const maxLength = input.getAttribute('maxlength');

	counter.innerText = maxLength;

	input.addEventListener('input', event => {
		const valueLength = event.target.value.length;

		const leftCharLength = maxLength - valueLength;
		
		if (leftCharLength < 0) return;
		
		counter.innerText = leftCharLength;
	});
  }
}

import { Component, Input, OnInit } from '@angular/core';

export interface CheckboxOption {
  label: string;
  checked: boolean;
} 

@Component({
  selector: 'wui-checkbox-list',
  template: `
    <div class="container">
        <ng-container *ngFor="let option of options; let i = index;">
            <input type="checkbox" name="opt-{{ i }}" id="ng-opt-{{ i }}" />
            <label for="ng-opt-{{ i }}">
                <span class="name">{{ option?.label }}</span>
                <span class="icon">
                    <i class="fa fa-check" aria-hidden="true"></i>
                </span>
            </label>
        </ng-container>
    </div>
  `,
  styleUrls: ['./checkbox-list.component.css']
})
export class CheckboxListComponent implements OnInit {

  @Input() options: CheckboxOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

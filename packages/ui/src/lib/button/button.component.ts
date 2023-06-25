import { Component, Input } from '@angular/core';

@Component({
  selector: 'nx-myorg-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() click!: () => void;
}

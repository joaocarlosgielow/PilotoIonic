import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-torge',
  templateUrl: 'input-torge.component.html',
  styleUrls: ['input-torge.component.scss'],
})
export class InputTorgeComponent  implements OnInit {
  @Input() label: String | undefined;
  @Input() type: String | undefined;
  @Input() styleInput: String | undefined;
  @Input() styleLabel: String | undefined;
  @Input() placeholder: String | undefined;

  constructor() { }

  ngOnInit() {

  }

}

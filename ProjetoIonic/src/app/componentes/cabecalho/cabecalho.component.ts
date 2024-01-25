import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.scss'],
})
export class CabecalhoComponent  implements OnInit {
  @Input() titulo: String | undefined;

  constructor() { }

  ngOnInit() {}

}

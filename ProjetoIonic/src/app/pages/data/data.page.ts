import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {
  public titulo: String = "Página de Datas";

  constructor() { }

  ngOnInit() {
  }

}

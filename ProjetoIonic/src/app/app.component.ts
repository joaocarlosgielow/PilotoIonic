import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public itens: componente[] = [
    {
      icone: "cash-outline",
      nome: "Vendas",
      link: "/vendas"
    },
    {
      icone: "archive-outline",
      nome: "Produtos",
      link: "/produtos"
    },
    {
      icone: "grid-outline",
      nome: "Grid",
      link: "/grid"
    },
    {
      icone: "calendar-outline",
      nome: "Datas",
      link: "/data"
    },
    {
      icone: "list-outline",
      nome: "Cards",
      link: "/cards"
    },
    {
      icone: "create-outline",
      nome: "Inputs",
      link: "/inputs"
    },
  ];
  constructor() {
    
  }
}

interface componente {
  icone: String,
  nome: String,
  link: String
}

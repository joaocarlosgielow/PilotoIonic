import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.page.html',
  styleUrls: ['./clientes.page.scss'],
})

export class ClientesPage implements OnInit {
  public titulo: String = "Clientes";
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

  constructor(private menu: MenuController) { 

  }

  ngOnInit(): void {
  }

  abreMenu() {
    this.menu.toggle();
  }
}


interface componente {
  icone: String;
  nome: String;
  link: String;
}
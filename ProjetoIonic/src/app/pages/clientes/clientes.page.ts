import { Component, OnInit } from '@angular/core';

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
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}


interface componente {
  icone: String;
  nome: String;
  link: String;
}
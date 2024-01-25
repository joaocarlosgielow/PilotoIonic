import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExceptionCode } from '@capacitor/core';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.page.html',
  styleUrls: ['./produtos.page.scss'],
})
export class ProdutosPage implements OnInit {
  public titulo: String = "Produtos";
  public produtos: listaProdutos[] = [
    {
      nome: "Água",
      preco: 12.63
    },
    {
      nome: "Pão",
      preco: 12.63
    },
    {
      nome: "Açucar",
      preco: 12.63
    },
    {
      nome: "Arroz",
      preco: 12.63
    },
    {
      nome: "Feijão",
      preco: 12.63
    },
    {
      nome: "Bolo",
      preco: 12.63
    },
    {
      nome: "Sucrilhos",
      preco: 12.63
    },
    {
      nome: "Leite",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },{
      nome: "Água",
      preco: 12.63
    },
    {
      nome: "Pão",
      preco: 12.63
    },
    {
      nome: "Açucar",
      preco: 12.63
    },
    {
      nome: "Arroz",
      preco: 12.63
    },
    {
      nome: "Feijão",
      preco: 12.63
    },
    {
      nome: "Bolo",
      preco: 12.63
    },
    {
      nome: "Sucrilhos",
      preco: 12.63
    },
    {
      nome: "Leite",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
    {
      nome: "Agua",
      preco: 12.63
    },
  ]
  public alertButtons = [
    {
      text:'Cancelar'
    }, 
    {
      text:'OK',
      handler: (data: { nome: String; sobrenome: String}) => {
        if (data.nome == "") {
          alert("Nome não informado");
          console.log("Nome não informado");
        } else {
          this.titulo = data.sobrenome == "" ? data.nome : data.nome + ' - ' + data.sobrenome;
        }
      }
    }
  ];
  public alertInputs = [
    {
      type: 'text',
      placeholder: 'Nome',
      name: 'nome'
    },
    {
      placeholder: 'Sobrenome',
      name: 'sobrenome',
      attributes: {
        maxlength: 8,
      },
    },
    {
      type: 'number',
      placeholder: 'Idade',
      min: 1,
      max: 100,
    },
    {
      type: 'date',
      title: 'Data de cadastro',
      label: 'Data de cadastro'
    },
    {
      type: 'textarea',
      placeholder: 'Mais sobre você...',
    },
  ];

  constructor() {

   }

  ngOnInit() {
  }

}

interface listaProdutos {
  nome: String;
  preco: number;
}

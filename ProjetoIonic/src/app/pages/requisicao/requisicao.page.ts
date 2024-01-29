import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-requisicao',
  templateUrl: './requisicao.page.html',
  styleUrls: ['./requisicao.page.scss'],
})
export class RequisicaoPage implements OnInit {
  public titulo: String = "Requisição REST";
  public itens: iitens[] = [];

  constructor(private api: ApiService) {

   }

  ngOnInit() {
  }

  clickRequisicao() {
    this.api.readData().subscribe(retorno =>{
      retorno.forEach(element =>{
        this.itens.push({id: element.id, titulo: element.title});
      })
    })
  };

}

interface iitens {
  id: number,
  titulo: String 
}

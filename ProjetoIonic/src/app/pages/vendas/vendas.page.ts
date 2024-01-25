import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.page.html',
  styleUrls: ['./vendas.page.scss'],
})

export class VendasPage implements OnInit {
  public titulo: String = "Vendas";

  public vendas: iVendas[] = [
    {
      nomeCliente: "João Carlos Gielow",
      valorVenda: 10.69
    },
    {
      nomeCliente: "Joelma Munaretto Aguiar",
      valorVenda: 119
    },
    {
      nomeCliente: "Liz Gielow",
      valorVenda: 56.23
    }
  ];

  constructor(private actionSheetCtrl: ActionSheetController) {
    
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: "Opções",
      // backdropDismiss: false,
      buttons: [
        {
          text: 'Excluír',
          role: 'destructive',
          icon: "trash",
          cssClass: "sheetExcluir",
          data: {
            action: 'delete',
          },
        },
        {
          text: 'Compartilhar',
          icon: "share",
          data: {
            action: 'share',
          },
        },
        {
          text: 'Tocar',
          icon: "play",
        },
        {
          text: 'Favoritar',
          icon: "heart",
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          icon: "Close",
          cssClass: "sheetCancelar",
          data: {
            action: 'cancel',
          },
        },
      ],
    });

    await actionSheet.present();
  }

  ngOnInit() {

  }
}

interface iVendas {
  nomeCliente: String,
  valorVenda: number
};
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {
  public titulo: String = "Página de Toast";
  public toastBotoens = [
    {
      text: 'OK',
      role: 'cancel',
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}

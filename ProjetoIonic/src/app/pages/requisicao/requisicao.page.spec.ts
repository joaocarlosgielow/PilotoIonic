import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RequisicaoPage } from './requisicao.page';

describe('RequisicaoPage', () => {
  let component: RequisicaoPage;
  let fixture: ComponentFixture<RequisicaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RequisicaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

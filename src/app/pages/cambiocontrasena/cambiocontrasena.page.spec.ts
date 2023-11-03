import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CambiocontrasenaPage } from './cambiocontrasena.page';

describe('CambiocontrasenaPage', () => {
  let component: CambiocontrasenaPage;
  let fixture: ComponentFixture<CambiocontrasenaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CambiocontrasenaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

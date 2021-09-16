import { AppPage } from '../../app.po';
import { browser } from 'protractor';
import { CargaActualizarPage } from '../../page/carga/carga-actualizar.po';

describe('workspace-project Actualizar carga', () => {
  let page: AppPage;
  let carga: CargaActualizarPage;

  beforeEach(async () => {
    page = new AppPage();
    carga = new CargaActualizarPage();
    page.navigateTo('carga/actualizar/1');
  });

  /**
   * probando los errores en los campos
   */
  it('Should see error "El nombre es requerido"', () => {
    carga.ingresarNombre('');
    page.clickLogo();

    expect(carga.getErrorNombreRequerido()).toEqual('El nombre es requerido');
  });

  it('Should see error "La descripción es requerida"', () => {
    carga.ingresarDescripcion('');
    page.clickLogo();

    expect(carga.getErrorDescripcionRequerida()).toEqual('La descripción es requerida');
  });

  it('Should see error "El costo de transporte es requerido"', () => {
    carga.ingresarCosto(null);
    page.clickLogo();

    expect(carga.getErrorCostoRequerido()).toEqual('El costo de transporte es requerido');
  });

  it('Should see error "El costo de transporte mínimo es 0 (cero)"', () => {
    carga.ingresarCosto(-1);
    page.clickLogo();

    expect(carga.getErrorCostoMinimo()).toEqual('El costo de transporte mínimo es 0 (cero)');
  });

  it('Should create the truck', () => {
    carga.ingresarNombre('test');
    carga.ingresarDescripcion('descripcion de test');
    carga.ingresarCosto(5);
    carga.clickBotonActualizarCarga();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'carga/listar');
  });

});

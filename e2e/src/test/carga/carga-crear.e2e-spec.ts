import { AppPage } from '../../app.po';
import { browser } from 'protractor';

import { CargaCrearPage } from '../../page/carga/carga-crear.po';

describe('workspace-project Crear carga', () => {
    let page: AppPage;
    let carga: CargaCrearPage;

    beforeEach(() => {
      page = new AppPage();
      carga = new CargaCrearPage();
      page.navigateTo('carga/crear');
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

    it('Should see error "El tipo de carga es requerido"', () => {
      carga.clickSelectorTipo();
      page.clickBackDrop();

      expect(carga.getErrorTipoRequerido()).toEqual('El tipo de carga es requerido');
    });

    it('Should see error "El estado de la carga es requerido"', () => {
      carga.clickSelectorEstado();
      page.clickBackDrop();

      expect(carga.getErrorEstadoRequerido()).toEqual('El estado de la carga es requerido');
    });

    it('Should create the truck', () => {
      carga.ingresarNombre('test');
      carga.ingresarDescripcion('descripcion de test');
      carga.ingresarCosto(5);
      carga.clickSelectorTipo();
      carga.seleccionarTipo('Contenedor');
      carga.clickSelectorEstado();
      carga.seleccionarEstado('espera');
      carga.clickBotonCrearCarga();

      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'carga/listar');
    });

});

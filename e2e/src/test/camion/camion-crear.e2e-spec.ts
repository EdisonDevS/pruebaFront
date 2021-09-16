import { AppPage } from '../../app.po';
import { browser } from 'protractor';

import { CamionCrearPage } from '../../page/camion/camion-crear.po';

describe('workspace-project Crear camión', () => {
    let page: AppPage;
    let camion: CamionCrearPage;

    beforeEach(() => {
      page = new AppPage();
      camion = new CamionCrearPage();
      page.navigateTo('camion/crear');
    });

    /**
     * probando los errores en los campos
     */
    it('Should see error "La placa es requerida"', () => {
      camion.ingresarPlaca('');
      page.clickLogo();

      expect(camion.getErrorPlacaRequerida()).toEqual('La placa es requerida');
    });

    it('Should see error "La placa debe tener máximo 6 caractéres"', () => {
      camion.ingresarPlaca('1234567');
      page.clickLogo();

      expect(camion.getErrorPlacaMaximo()).toEqual('La placa debe tener máximo 6 caractéres');
    });

    it('Should see error "La marca es requerida"', () => {
      camion.ingresarMarca('');
      page.clickLogo();

      expect(camion.getErrorMarcaRequerida()).toEqual('La marca es requerida');
    });

    it('Should see error "El modelo es requerido"', () => {
      camion.ingresarModelo('');
      page.clickLogo();

      expect(camion.getErrorModeloRequerido()).toEqual('El modelo es requerido');
    });

    it('Should see error "La disponibilidad es requerida"', () => {
      camion.clickSelectorDisponibilidad();
      page.clickBackDrop();

      expect(camion.getErrorDisponibilidadRequerida()).toEqual('La disponibilidad es requerida');
    });

    it('Should create the truck', () => {
      camion.ingresarPlaca('aaaqqq');
      camion.ingresarModelo('xt-660');
      camion.ingresarMarca('Scania');
      camion.clickSelectorDisponibilidad();
      camion.seleccionarDisponibilidad('true');
      camion.clickBotonCrearCamion();

      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'camion/listar');
    });

});

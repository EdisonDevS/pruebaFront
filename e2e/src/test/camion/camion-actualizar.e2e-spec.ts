import { AppPage } from '../../app.po';
import { browser } from 'protractor';
import { CamionActualizarPage } from '../../page/camion/camion-actualizar.po';

describe('workspace-project Actualizar camión', () => {
    let page: AppPage;
    let camion: CamionActualizarPage;

    beforeEach(async () => {
      page = new AppPage();
      camion = new CamionActualizarPage();
      page.navigateTo('camion/actualizar/1');
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

    it('Should update the truck', () => {
      camion.ingresarPlaca('aaaqqq');
      camion.ingresarModelo('xt-660');
      camion.ingresarMarca('Scania');
      camion.clickBotonActualizarCamion();

      expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'camion/listar');
    });

});

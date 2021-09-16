import { browser, by, element, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class CamionActualizarPage {
  private CAMION = {
    inputPlaca: (): ElementFinder => element(by.id('camion-actualizar__placa')),
    errorPlacaRequerida: (): ElementFinder => element(by.id('camion-actualizar__error-placa__requerida')),
    errorPlacaMaximo: (): ElementFinder => element(by.id('camion-actualizar__error-placa__maximo')),
    inputMarca: (): ElementFinder => element(by.id('camion-actualizar__marca')),
    errorMarcaRequerida: (): ElementFinder => element(by.id('camion-actualizar__error-marca__requerida')),
    inputModelo: (): ElementFinder => element(by.id('camion-actualizar__modelo')),
    errorModeloRequerido: (): ElementFinder => element(by.id('camion-actualizar__error-modelo__requerido')),
    selectDisponibilidad: (): ElementFinder => element(by.id('camion-actualizar__disponible')),
    selectDisponibilidadOption: (option: string): ElementFinder => element(by.id(`camion-actualizar__disponible-option-${option}`)),
    errorSelectDisponibilidadRequerido: (): ElementFinder => element(by.id('camion-actualizar__error-disponibilidad__requerida')),
    btnCrear: (): ElementFinder => element(by.id('camion-actualizar__btn-actualizar')),
  };

  /**
   * formulario de creación
   */
  async ingresarPlaca(placa: string) {
    this.CAMION.inputPlaca().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).then(() => {
      this.CAMION.inputPlaca().sendKeys(protractor.Key.BACK_SPACE);
      this.CAMION.inputPlaca().sendKeys(placa);
    });
  }

  async getErrorPlacaRequerida() {
    return await this.CAMION.errorPlacaRequerida().getText();
  }

  async getErrorPlacaMaximo() {
    return await this.CAMION.errorPlacaMaximo().getText();
  }

  async ingresarMarca(marca: string) {
    this.CAMION.inputMarca().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).then(() => {
      this.CAMION.inputMarca().sendKeys(protractor.Key.BACK_SPACE);
      this.CAMION.inputMarca().sendKeys(marca);
    });
  }

  async getErrorMarcaRequerida() {
    return await this.CAMION.errorMarcaRequerida().getText();
  }

  async ingresarModelo(modelo: string) {
    this.CAMION.inputModelo().sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a')).then(() => {
      this.CAMION.inputModelo().sendKeys(protractor.Key.BACK_SPACE);
      this.CAMION.inputModelo().sendKeys(modelo);
    });
  }

  async getErrorModeloRequerido() {
    return await this.CAMION.errorModeloRequerido().getText();
  }

  async clickSelectorDisponibilidad() {
    await this.CAMION.selectDisponibilidad().click();
    browser.sleep(100);
  }

  async seleccionarDisponibilidad(disponibilidad: string) {
    await this.CAMION.selectDisponibilidadOption(disponibilidad).click();
    browser.sleep(100);
  }

  async getErrorDisponibilidadRequerida() {
    return await this.CAMION.errorSelectDisponibilidadRequerido().getText();
  }

  async clickBotonActualizarCamion() {
    await this.CAMION.btnCrear().click();
    browser.sleep(100);
  }

}

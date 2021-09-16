import { browser, by, element, ElementFinder } from 'protractor';

export class CamionCrearPage {
  private CAMION = {
    inputPlaca: (): ElementFinder => element(by.id('camion-crear__placa')),
    errorPlacaRequerida: (): ElementFinder => element(by.id('camion-crear__error-placa__requerida')),
    errorPlacaMaximo: (): ElementFinder => element(by.id('camion-crear__error-placa__maximo')),
    inputMarca: (): ElementFinder => element(by.id('camion-crear__marca')),
    errorMarcaRequerida: (): ElementFinder => element(by.id('camion-crear__error-marca__requerida')),
    inputModelo: (): ElementFinder => element(by.id('camion-crear__modelo')),
    errorModeloRequerido: (): ElementFinder => element(by.id('camion-crear__error-modelo__requerido')),
    selectDisponibilidad: (): ElementFinder => element(by.id('camion-crear__disponible')),
    selectDisponibilidadOption: (option: string): ElementFinder => element(by.id(`camion-crear__disponible-option-${option}`)),
    errorSelectDisponibilidadRequerido: (): ElementFinder => element(by.id('camion-crear__error-disponibilidad__requerida')),
    btnCrear: (): ElementFinder => element(by.id('camion-crear__btn-crear')),
  };

  /**
   * formulario de creación
   */
  async ingresarPlaca(placa: string) {
    await this.CAMION.inputPlaca().sendKeys(placa);
  }

  async getErrorPlacaRequerida() {
    return await this.CAMION.errorPlacaRequerida().getText();
  }

  async getErrorPlacaMaximo() {
    return await this.CAMION.errorPlacaMaximo().getText();
  }

  async ingresarMarca(marca: string) {
    await this.CAMION.inputMarca().sendKeys(marca);
  }

  async getErrorMarcaRequerida() {
    return await this.CAMION.errorMarcaRequerida().getText();
  }

  async ingresarModelo(modelo: string) {
    await this.CAMION.inputModelo().sendKeys(modelo);
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

  async clickBotonCrearCamion() {
    await this.CAMION.btnCrear().click();
    browser.sleep(100);
  }

}

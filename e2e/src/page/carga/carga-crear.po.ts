import { browser, by, element, ElementFinder } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class CargaCrearPage {
  private CARGA = {
    inputNombre: (): ElementFinder => element(by.id('carga-crear__nombre')),
    errorNombreRequerido: (): ElementFinder => element(by.id('carga-crear__error-nombre__requerido')),
    inputDescripcion: (): ElementFinder => element(by.id('carga-crear__descripcion')),
    errorDescripcionRequerida: (): ElementFinder => element(by.id('carga-crear__error-descripcion__requerida')),
    inputCosto: (): ElementFinder => element(by.id('carga-crear__costo')),
    errorCostoRequerido: (): ElementFinder => element(by.id('carga-crear__error-costo__requerido')),
    errorCostoMinimo: (): ElementFinder => element(by.id('carga-crear__error-costo__minimo')),
    selectTipo: (): ElementFinder => element(by.id('carga-crear__tipo')),
    selectTipoOption: (option: string): ElementFinder => element(by.id(`carga-crear__tipo-option-${option}`)),
    errorSelectTipoRequerido: (): ElementFinder => element(by.id('carga-crear__error-tipo__requerido')),
    selectEstado: (): ElementFinder => element(by.id('carga-crear__estado')),
    selectEstadoOption: (option: string): ElementFinder => element(by.id(`carga-crear__estado-option-${option}`)),
    errorSelectEstadoRequerido: (): ElementFinder => element(by.id('carga-crear__error-estado__requerido')),
    btnCrear: (): ElementFinder => element(by.id('carga-crear__btn-crear')),
  };

  /**
   * formulario de creación
   */
  async ingresarNombre(nombre: string) {
    await this.CARGA.inputNombre().sendKeys(nombre);
  }

  async getErrorNombreRequerido() {
    return await this.CARGA.errorNombreRequerido().getText();
  }

  async ingresarDescripcion(descripcion: string) {
    await this.CARGA.inputDescripcion().sendKeys(descripcion);
  }

  async getErrorDescripcionRequerida() {
    return await this.CARGA.errorDescripcionRequerida().getText();
  }

  async ingresarCosto(costo: number) {
    if (!costo) {
      await this.CARGA.inputCosto().sendKeys(1);
      await this.CARGA.inputCosto().sendKeys(protractor.Key.BACK_SPACE);
    } else {
      await this.CARGA.inputCosto().sendKeys(costo);
    }
  }

  async getErrorCostoRequerido() {
    return await this.CARGA.errorCostoRequerido().getText();
  }

  async getErrorCostoMinimo() {
    return await this.CARGA.errorCostoMinimo().getText();
  }

  async clickSelectorTipo() {
    await this.CARGA.selectTipo().click();
    browser.sleep(100);
  }

  async seleccionarTipo(tipo: string) {
    await this.CARGA.selectTipoOption(tipo).click();
    browser.sleep(100);
  }

  async getErrorTipoRequerido() {
    return await this.CARGA.errorSelectTipoRequerido().getText();
  }

  async clickSelectorEstado() {
    await this.CARGA.selectEstado().click();
    browser.sleep(100);
  }

  async seleccionarEstado(estado: string) {
    await this.CARGA.selectEstadoOption(estado).click();
    browser.sleep(100);
  }

  async getErrorEstadoRequerido() {
    return await this.CARGA.errorSelectEstadoRequerido().getText();
  }

  async clickBotonCrearCarga() {
    await this.CARGA.btnCrear().click();
    browser.sleep(100);
  }

}

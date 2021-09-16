import { $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ContratoListarPage {
  private CONTRATO = {
    inputBusqueda: (): ElementFinder => element(by.id('busqueda-tabla__input')),
    filasTabla: (): ElementArrayFinder => $$('.row'),
    btnActualizar: (itemId: number): ElementFinder => element(by.id(`action-button__${itemId}`)),
    detalleContratoPLacaCamion: (): ElementFinder => element(by.id('detalle-contrato__placa-camion')),
    detalleContratoNombreCarga: (): ElementFinder => element(by.id('detalle-contrato__nombre-carga')),
    btnFinalizarContrato: (): ElementArrayFinder => element.all(by.id('detalle-contrato__btn-finalizar')),
  };

  /**
   * formulario de creación
   */
  async buscar(cadena: string) {
    await this.CONTRATO.inputBusqueda().sendKeys(cadena);
    browser.sleep(100);
  }

  async obtenerFilas(): Promise<any> {
    const filas = await this.CONTRATO.filasTabla().getText();
    return filas;
  }

  async clickActualizar(itemId: number) {
    await this.CONTRATO.btnActualizar(itemId).click();
    browser.sleep(100);
  }

  async clickDetalleContrato() {
    const filas: ElementFinder[] = await this.CONTRATO.filasTabla();
    const celadas = await filas[1].all(by.css('.cell')).getText();
    await filas[1].element(by.id('select-button')).click();
    browser.sleep(100);
    return celadas;
  }

  async getDetalleContratoPlacaCamion() {
    return await this.CONTRATO.detalleContratoPLacaCamion().getText();
  }

  async getDetalleContratoNombreCarga() {
    return await this.CONTRATO.detalleContratoNombreCarga().getText();
  }

  async clickFinalizarContrato() {
    await this.CONTRATO.btnFinalizarContrato().click();
    browser.sleep(100);
  }
}

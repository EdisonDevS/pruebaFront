import { $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CargaListarPage {
  private CARGA = {
    inputBusqueda: (): ElementFinder => element(by.id('busqueda-tabla__input')),
    filasTabla: (): ElementArrayFinder => $$('.row'),
    btnActualizar: (itemId: number): ElementFinder => element(by.id(`action-button__${itemId}`)),
  };

  /**
   * formulario de creación
   */
  async buscar(cadena: string) {
    await this.CARGA.inputBusqueda().sendKeys(cadena);
    browser.sleep(100);
  }

  async obtenerFilas(): Promise<any> {
    const filas = await this.CARGA.filasTabla().getText();
    return filas;
  }

  async clickActualizar(itemId: number) {
    await this.CARGA.btnActualizar(itemId).click();
    browser.sleep(100);
  }
}

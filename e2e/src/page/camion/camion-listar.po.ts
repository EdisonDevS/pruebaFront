import { $$, browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class CamionListarPage {
  private CAMION = {
    inputBusqueda: (): ElementFinder => element(by.id('busqueda-tabla__input')),
    filasTabla: (): ElementArrayFinder => $$('.row'),
    btnActualizar: (itemId: number): ElementFinder => element(by.id(`action-button__${itemId}`)),
  };

  /**
   * formulario de creación
   */
  async buscar(cadena: string) {
    await this.CAMION.inputBusqueda().sendKeys(cadena);
    browser.sleep(100);
  }

  async obtenerFilas(): Promise<any> {
    const filas = await this.CAMION.filasTabla().getText();

    return filas;
  }

  async clickActualizar(itemId: number) {
    await this.CAMION.btnActualizar(itemId).click();
    browser.sleep(100);
  }
}

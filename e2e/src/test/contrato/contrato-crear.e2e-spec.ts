import { browser, ElementFinder } from 'protractor';
import { AppPage } from '../../app.po';

import { ContratoCrearPage } from '../../page/contrato/contrato-crear.po';

describe('workspace-project Crear contrato', () => {
  let page: AppPage;
  let contrato: ContratoCrearPage;

  beforeEach(() => {
    page = new AppPage();
    contrato = new ContratoCrearPage();
    page.navigateTo('contrato/crear');
  });

  /**
   * probando los errores en los campos
   */
  it('Should select the truck', async () => {
    await contrato.clickBtnSeleccionarCamion();
    const celdasPrimerElemento: ElementFinder = await contrato.clickSeleccionarPrimero();

    const placaSeleccionada: string = await contrato.getCamionSeleccionadoPlaca();
    const marcaSeleccionada: string = await contrato.getCamionSeleccionadoMarca();
    const modeloSeleccionado: string = await contrato.getCamionSeleccionadoModelo();

    expect(placaSeleccionada).toEqual(celdasPrimerElemento[1]);
    expect(marcaSeleccionada).toEqual(celdasPrimerElemento[2]);
    expect(modeloSeleccionado).toEqual(celdasPrimerElemento[3]);
  });

  it('Should select the cargo', async () => {
    await contrato.clickBtnSeleccionarCarga();
    const celdasPrimerElemento: ElementFinder = await contrato.clickSeleccionarPrimero();

    const nombreSeleccionado: string = await contrato.getCargaSeleccionadaNombre();
    const tipoSeleccionado: string = await contrato.getCargaSeleccionadaTipo();
    const estadoSeleccionado: string = await contrato.getCargaSeleccionadaEstado();

    expect(nombreSeleccionado).toEqual(celdasPrimerElemento[1]);
    expect(tipoSeleccionado).toEqual(celdasPrimerElemento[3]);
    expect(estadoSeleccionado).toEqual(celdasPrimerElemento[4]);
  });

  it('should see error "La distancia en Km es requerida"', () => {
    contrato.ingresarDistancia('');
    page.clickLogo();

    expect(contrato.getErrorDistanciaRequerida()).toEqual('La distancia en Km es requerida');
  });

  it('should see error "La distancia mínima en Km para el contrato es 0 (cero)"', () => {
    contrato.ingresarDistancia('-1');
    page.clickLogo();

    expect(contrato.getErrorDistanciaMinima()).toEqual('La distancia mínima en Km para el contrato es 0 (cero)');
  });

  it('should create the contract', async () => {
    await contrato.clickBtnSeleccionarCamion();
    await contrato.clickSeleccionarPrimero();

    await contrato.clickBtnSeleccionarCarga();
    await contrato.clickSeleccionarPrimero();

    contrato.ingresarDistancia('50');

    await contrato.clickBtnCrearContrato();

    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + 'contrato/listar');
  });

});

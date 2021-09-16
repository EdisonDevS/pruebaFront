import { browser, by, element, ElementArrayFinder, ElementFinder } from 'protractor';

export class ContratoCrearPage {
    private CONTRATO = {
        btnSeleccionarCamion: (): ElementFinder => element(by.id('contrato-crear__btn-seleccionar-camion')),
        camionSeleccionadoPlaca: (): ElementFinder => element(by.id('contrato-crear__camion-seleccionado-placa')),
        camionSeleccionadoMarca: (): ElementFinder => element(by.id('contrato-crear__camion-seleccionado-marca')),
        camionSeleccionadoModelo: (): ElementFinder => element(by.id('contrato-crear__camion-seleccionado-modelo')),
        btnSeleccionarCarga: (): ElementFinder => element(by.id('contrato-crear__btn-seleccionar-carga')),
        cargaSeleccionadaNombre: (): ElementFinder => element(by.id('contrato-crear__carga-seleccionada-nombre')),
        cargaSeleccionadaTipo: (): ElementFinder => element(by.id('contrato-crear__carga-seleccionada-tipo')),
        cargaSeleccionadaEstado: (): ElementFinder => element(by.id('contrato-crear__carga-seleccionada-estado')),
        inputDistancia: (): ElementFinder => element(by.id('contrato-crear__distancia')),
        errorDistanciaRequerida: (): ElementFinder => element(by.id('contrato-crear__error-distancia-requerida')),
        errorDistanciaMinima: (): ElementFinder => element(by.id('contrato-crear__error-distancia-minima')),
        filasTabla: (): ElementArrayFinder => element.all(by.css('.row')),
        btnCrearContrato: (): ElementFinder => element(by.id('contrato-crear__btn-crear')),
    };

    /**
     * formulario de creación
     */
    async clickBtnSeleccionarCamion() {
        await this.CONTRATO.btnSeleccionarCamion().click();
        browser.sleep(100);
    }

    async getCamionSeleccionadoPlaca() {
        const placa = await this.CONTRATO.camionSeleccionadoPlaca().getText();
        return placa;
    }

    async getCamionSeleccionadoMarca() {
        const marca = await this.CONTRATO.camionSeleccionadoMarca().getText();
        return marca;
    }

    async getCamionSeleccionadoModelo() {
        const modelo = await this.CONTRATO.camionSeleccionadoModelo().getText();
        return modelo;
    }

    async clickBtnSeleccionarCarga() {
        await this.CONTRATO.btnSeleccionarCarga().click();
        browser.sleep(100);
    }

    async getCargaSeleccionadaNombre() {
        const nombre = await this.CONTRATO.cargaSeleccionadaNombre().getText();
        return nombre;
    }

    async getCargaSeleccionadaTipo() {
        const tipo = await this.CONTRATO.cargaSeleccionadaTipo().getText();
        return tipo;
    }

    async getCargaSeleccionadaEstado() {
        const estado = await this.CONTRATO.cargaSeleccionadaEstado().getText();
        return estado;
    }

    async ingresarDistancia(distancia: string) {
        await this.CONTRATO.inputDistancia().sendKeys(distancia);
    }

    async getErrorDistanciaRequerida() {
        return  await this.CONTRATO.errorDistanciaRequerida().getText();
    }

    async getErrorDistanciaMinima() {
        return  await this.CONTRATO.errorDistanciaMinima().getText();
    }

    async clickSeleccionarPrimero(): Promise<ElementFinder> {
        const filas: ElementFinder[] = await this.CONTRATO.filasTabla();
        const celadas = await filas[1].all(by.css('.cell')).getText();
        await filas[1].element(by.id('select-button')).click();
        browser.sleep(100);
        return celadas;
    }

    async clickBtnCrearContrato() {
        await this.CONTRATO.btnCrearContrato().click();
        browser.sleep(100);
    }

}

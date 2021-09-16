import { ContratoListarPage } from '../../page/contrato/contrato-listar.po';
import { AppPage } from '../../app.po';
import { browser } from 'protractor';

describe('workspace-project Listar carga', () => {
    let page: AppPage;
    let contrato: ContratoListarPage;

    beforeEach(async () => {
      page = new AppPage();
      contrato = new ContratoListarPage();
      page.navigateTo('contrato/listar');
    });

    /**
     * probando los errores en los campos
     */
    it('should see the table headers', async () => {
        const data = await contrato.obtenerFilas();
        expect(data[0]).toEqual('ID Placa camión Nombre carga Costo/Km Acciones');
    });

    it('should filter by string', async () => {
        const cadena = '1';
        const tableData = await contrato.obtenerFilas();
        const expectedFilteredData: string[] = tableData.filter((item: string) => item.includes(cadena));
        expectedFilteredData.unshift(tableData[0]);

        contrato.buscar(cadena);
        browser.sleep(100);

        const filteredData = await contrato.obtenerFilas();

        expect(filteredData).toEqual(expectedFilteredData);
    });

    it('should see contract detail', async () => {
        const celdas = await contrato.clickDetalleContrato();

        const detallePLacaCamion = await contrato.getDetalleContratoPlacaCamion();
        const detalleNombreCarga = await contrato.getDetalleContratoNombreCarga();

        expect(detallePLacaCamion).toEqual(celdas[1]);
        expect(detalleNombreCarga).toEqual(celdas[2]);

    });

    it('should end the contract', async () => {
        const contratos = await contrato.obtenerFilas();
        await contrato.clickDetalleContrato();
        await contrato.clickFinalizarContrato();

        const contratosDespuesDeFinalizar = await contrato.obtenerFilas();

        expect(contratos[1]).not.toEqual(contratosDespuesDeFinalizar[1]);
    });

});

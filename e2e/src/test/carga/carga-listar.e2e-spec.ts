import { AppPage } from '../../app.po';
import { browser } from 'protractor';
import { CargaListarPage } from '../../page/carga/carga-listar.po';

describe('workspace-project Listar carga', () => {
    let page: AppPage;
    let carga: CargaListarPage;

    beforeEach(async () => {
      page = new AppPage();
      carga = new CargaListarPage();
      page.navigateTo('carga/listar');
    });

    /**
     * probando los errores en los campos
     */
    it('should see the table headers', async () => {
        const data = await carga.obtenerFilas();

        expect(data[0]).toEqual('ID Nombre Descripción Tipo Estado Costo/Km Acciones');
    });

    it('should filter by string', async () => {
        const cadena = '1';
        const tableData = await carga.obtenerFilas();
        const expectedFilteredData: string[] = tableData.filter((item: string) => item.includes(cadena));
        expectedFilteredData.unshift(tableData[0]);

        carga.buscar(cadena);
        browser.sleep(100);

        const filteredData = await carga.obtenerFilas();

        expect(filteredData).toEqual(expectedFilteredData);
    });

    it('should redirect to update page', async () => {
        const itemId = 1;

        await carga.clickActualizar(itemId);

        expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}carga/actualizar/${itemId}`);
    });

});

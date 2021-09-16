import { CamionListarPage } from '../../page/camion/camion-listar.po';
import { AppPage } from '../../app.po';
import { browser } from 'protractor';

describe('workspace-project Listar camiones', () => {
    let page: AppPage;
    let camion: CamionListarPage;

    beforeEach(async () => {
      page = new AppPage();
      camion = new CamionListarPage();
      page.navigateTo('camion/listar');
    });

    /**
     * probando los errores en los campos
     */
    it('should see the table headers', async () => {
        const data = await camion.obtenerFilas();

        expect(data[0]).toEqual('ID Placa Marca Modelo Disponibilidad Acciones');
    });

    it('should filter by string', async () => {
        const cadena = '1';
        const tableData = await camion.obtenerFilas();
        const expectedFilteredData: string[] = tableData.filter((item: string) => item.includes(cadena));
        expectedFilteredData.unshift(tableData[0]);

        camion.buscar(cadena);
        browser.sleep(100);

        const filteredData = await camion.obtenerFilas();

        expect(filteredData).toEqual(expectedFilteredData);
    });

    it('should redirect to update page', async () => {
        const itemId = 1;

        await camion.clickActualizar(itemId);

        expect(browser.getCurrentUrl()).toEqual(`${browser.baseUrl}camion/actualizar/${itemId}`);
    });

});

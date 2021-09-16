import { browser, by, element, ElementFinder } from 'protractor';

export class SidenavPage {
    private SIDENAV = {
      expand: (category: string): ElementFinder => element(by.id('sidenav-' + category)),
      btnOption: (category: string, url: string): ElementFinder => element(by.id('sidenav-' + category + '__' + url))
    };

    async navegarCategorias(category: string, url: string) {
      await this.SIDENAV.expand(category).click();
      browser.sleep(100);
      await this.SIDENAV.btnOption(category, url).click();
      browser.sleep(100);
    }
}

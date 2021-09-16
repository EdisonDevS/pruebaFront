import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(url: string) {
    return browser.get(browser.baseUrl + url) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }

  clickLogo() {
    element(by.id('logo-ceiba')).click();
    browser.sleep(100);
  }

  clickBackDrop() {
    const overlay = element(by.className('cdk-overlay-backdrop'));
    browser.actions()
    .mouseMove(overlay, {x: 0, y: 0})
    .click()
    .perform();
    browser.sleep(100);
  }
}

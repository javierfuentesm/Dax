const { I } = inject()

class DaxStoreLocatorPage {
	open = () => {
		I.amOnPage('/store-locator')
		I.waitInUrl('/store-locator', 30)
		I.waitForVisible('input[placeholder="Código postal"]', 30)
	}

	seeStoreLocator = () => {
		I.seeInCurrentUrl('/store-locator')
		I.see('Localiza tu tienda')
		I.see('Dax')
		I.see('Ubicación')
		I.see('Teléfono')
		I.see('Código postal')
	}
}

export = new DaxStoreLocatorPage()

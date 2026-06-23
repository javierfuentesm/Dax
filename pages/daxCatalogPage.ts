const { I } = inject()

class DaxCatalogPage {
	openMakeup = () => {
		I.amOnPage('/maquillaje')
		I.waitInUrl('/maquillaje', 30)
		I.waitForVisible('a[data-testid^="sf-product-tile-"]', 30)
	}

	seeMakeupListing = () => {
		I.seeInCurrentUrl('/maquillaje')
		I.see('Maquillaje')
		I.see('items')
		I.see('Ordenar por')
		I.see('Categorias')
		I.see('Marca')
		I.see('Color')
		I.see('Precio')
		I.seeElement('a[data-testid^="sf-product-tile-"]')
	}

	openFirstProductFromListing = () => {
		I.waitForVisible('a[data-testid^="sf-product-tile-"]', 30)
		I.click('a[data-testid^="sf-product-tile-"]')
		I.waitInUrl('/producto/', 30)
		I.waitForVisible('[data-testid="product-details-page"]', 30)
	}
}

export = new DaxCatalogPage()

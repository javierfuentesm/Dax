const { I } = inject()

class DaxSearchPage {
	searchFor = (term: string) => {
		I.waitForVisible('input[placeholder*="buscando"]', 30)
		I.fillField('input[placeholder*="buscando"]', term)
		I.pressKey('Enter')
		I.waitInUrl(`/search?q=${encodeURIComponent(term)}`, 30)
		I.seeInCurrentUrl(`/search?q=${encodeURIComponent(term)}`)
	}

	openResults = (term: string) => {
		I.amOnPage(`/search?q=${encodeURIComponent(term)}`)
		I.waitInUrl(`/search?q=${encodeURIComponent(term)}`, 30)
		I.waitForVisible('a[data-testid^="sf-product-tile-"]', 30)
	}

	seeResultsFor = (term: string) => {
		I.waitInUrl(`/search?q=${encodeURIComponent(term)}`, 30)
		I.seeInCurrentUrl(`/search?q=${encodeURIComponent(term)}`)
		I.see(term)
		I.waitForVisible('a[data-testid^="sf-product-tile-"]', 30)
		I.seeElement('a[data-testid^="sf-product-tile-"]')
	}
}

export = new DaxSearchPage()

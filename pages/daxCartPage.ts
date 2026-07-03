const { I } = inject()

class DaxCartPage {
	open = () => {
		I.amOnPage('/cart')
		I.waitInUrl('/cart', 30)
		I.waitForVisible('body', 30)
	}

	seeEmptyCart = () => {
		I.seeInCurrentUrl('/cart')
		I.see('carrito')
		I.see('Tu carrito está vacío')
		I.see('Continuar comprando')
	}
}

export = new DaxCartPage()

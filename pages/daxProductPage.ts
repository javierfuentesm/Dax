const { I } = inject()

class DaxProductPage {
	seeProductDetail = () => {
		I.see('Agregar al carrito')
		I.see('Comprar ahora')
		I.see('Descripción')
		I.see('Envío')
		I.see('Cambios y devoluciones')
		I.seeElement('[data-testid="product-details-page"]')
		I.seeElement('[data-testid="product-view"]')
		I.seeElement('button[data-testid="quantity-increment"]')
	}
}

export = new DaxProductPage()

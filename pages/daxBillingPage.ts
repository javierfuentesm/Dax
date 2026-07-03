const { I } = inject()

class DaxBillingPage {
	open = () => {
		I.amOnPage('https://facturaelectronica.dax.com.mx/#/home')
		I.waitForVisible('body', 30)
		I.waitForText('Facturar Ahora', 30)
	}

	seeBillingPortal = () => {
		I.see('Facturar Ahora')
		I.see('Recuperar Factura')
		I.see('CFDI')
		I.see('Factura')
	}
}

export = new DaxBillingPage()

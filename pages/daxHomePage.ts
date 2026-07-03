const { I } = inject()

class DaxHomePage {
	open = () => {
		I.amOnPage('/')
		I.waitForVisible('input[placeholder*="buscando"]', 30)
	}

	seeHeaderAndPublicNavigation = () => {
		I.see('Introduce tu código postal')
		I.see('Inicia Sesión')
		I.see('Departamentos')
		I.see('Localiza tu tienda')
		I.see('Facturación')
		I.seeElement('input[placeholder*="buscando"]')
	}

	openDepartmentsMenu = async () => {
		const opened = await globalThis.tryTo(() => I.click('Departamentos'))

		if (!opened) {
			await globalThis.tryTo(() => I.click('button:has-text("Menú")'))
			await globalThis.tryTo(() => I.click('button[aria-label*="menu"]'))
			await globalThis.tryTo(() => I.click('Departamentos'))
		}

		I.waitForText('Maquillaje', 30)
	}

	seeMainDepartments = async () => {
		I.see('Maquillaje')
		I.see('Cuidado Facial')
		I.see('Cuidado Corporal')
		I.see('Cuidado del Cabello')
		I.see('Hombre')
		I.see('Farmacia')
		I.see('Marcas')
		await globalThis.tryTo(() => I.click('Departamentos'))
	}

	seeFooter = () => {
		I.scrollTo('footer')
		I.see('Atención al Cliente')
		I.see('Política de Devolución')
		I.see('Política de Privacidad')
		I.see('Términos y Condiciones')
	}
}

export = new DaxHomePage()

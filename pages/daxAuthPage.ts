const { I } = inject()

class DaxAuthPage {
	openLogin = () => {
		I.amOnPage('/login')
		I.waitInUrl('/login', 30)
		I.waitForVisible('input[type="email"]', 30)
	}

	seeLoginUi = () => {
		I.see('Bienvenido otra vez')
		I.see('Email')
		I.see('Contraseña')
		I.see('¿Olvidaste la contraseña?')
		I.see('Registrarse')
		I.seeElement('input[type="email"]')
	}
}

export = new DaxAuthPage()

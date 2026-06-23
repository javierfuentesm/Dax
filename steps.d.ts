/* eslint-disable */
/// <reference types='codeceptjs' />
type steps_file = () => {
	grabDimensionsOfCurrentPage: () => Promise<{
		width: number
		height: number
		deviceScaleFactor: number
	}>
	checkIfCurrentDeviceIsTablet: () => Promise<{
		isDeviceTablet: boolean
		orientation: string
	}>
	fileExists(filePath: string): Promise<boolean>
	downloadFileFromSource({
		filePath,
		downloadPath,
		downloadPDFButton,
	}: {
		filePath: string
		downloadPath: string
		downloadPDFButton: string
	}): Promise<void>
	deleteFile(filePath: string): Promise<void>
	downloadFile({
		pdfPath,
		downloadPath,
		fileName,
		downloadPDFButton,
	}: {
		pdfPath: string
		downloadPath: string
		fileName: string
		downloadPDFButton: string
	})
	readPdf: (pdfUrl: string) => Promise<string>
}
type loginPage = typeof import('./pages/loginPage')
type daxAuthPage = typeof import('./pages/daxAuthPage')
type daxBillingPage = typeof import('./pages/daxBillingPage')
type daxCartPage = typeof import('./pages/daxCartPage')
type daxCatalogPage = typeof import('./pages/daxCatalogPage')
type daxHomePage = typeof import('./pages/daxHomePage')
type daxProductPage = typeof import('./pages/daxProductPage')
type daxSearchPage = typeof import('./pages/daxSearchPage')
type daxStoreLocatorPage = typeof import('./pages/daxStoreLocatorPage')
type PlaywrightVideoAllure =
	typeof import('./utils/playwrightVideoAllure_helper')
type DbHelper = import('./node_modules/codeceptjs-dbhelper')
type ChaiWrapper = import('codeceptjs-chai')

declare namespace CodeceptJS {
	interface SupportObject {
		I: I
		current: any
		login: (profile: profileType) => Promise<void>
		loginPage: loginPage
		daxAuthPage: daxAuthPage
		daxBillingPage: daxBillingPage
		daxCartPage: daxCartPage
		daxCatalogPage: daxCatalogPage
		daxHomePage: daxHomePage
		daxProductPage: daxProductPage
		daxSearchPage: daxSearchPage
		daxStoreLocatorPage: daxStoreLocatorPage
	}
	interface Methods
		extends Playwright,
			PlaywrightVideoAllure,
			REST,
			GraphQL,
			DbHelper,
			ChaiWrapper {}
	interface I extends ReturnType<steps_file>, WithTranslation<Methods> {}
	namespace Translation {
		interface Actions {}
	}
}

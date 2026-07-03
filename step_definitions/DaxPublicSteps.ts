import daxAuthPage from '../pages/daxAuthPage'
import daxBillingPage from '../pages/daxBillingPage'
import daxCartPage from '../pages/daxCartPage'
import daxCatalogPage from '../pages/daxCatalogPage'
import daxHomePage from '../pages/daxHomePage'
import daxProductPage from '../pages/daxProductPage'
import daxSearchPage from '../pages/daxSearchPage'
import daxStoreLocatorPage from '../pages/daxStoreLocatorPage'

Given('I open the DAX home page', () => {
	daxHomePage.open()
})

Then('I should see the DAX public header', async () => {
	await daxHomePage.seeHeaderAndPublicNavigation()
})

When('I open the DAX departments menu', async () => {
	await daxHomePage.openDepartmentsMenu()
})

Then('I should see the DAX main departments', async () => {
	await daxHomePage.seeMainDepartments()
})

Then('I should see the DAX public footer', async () => {
	await daxHomePage.seeFooter()
})

When(/^I search DAX for "([^"]*)"$/, async (term: string) => {
	await daxSearchPage.searchFor(term)
})

Then(/^I should see DAX search results for "([^"]*)"$/, async (term: string) => {
	await daxSearchPage.seeResultsFor(term)
})

Given('I open the DAX makeup catalog', () => {
	daxCatalogPage.openMakeup()
})

Then('I should see the DAX makeup listing', async () => {
	await daxCatalogPage.seeMakeupListing()
})

When('I open the first DAX product from the listing', async () => {
	await daxCatalogPage.openFirstProductFromListing()
})

Then('I should see the DAX product detail', async () => {
	await daxProductPage.seeProductDetail()
})

Given('I open the DAX empty cart', () => {
	daxCartPage.open()
})

Then('I should see the DAX empty cart state', async () => {
	await daxCartPage.seeEmptyCart()
})

Given('I open the DAX login page', () => {
	daxAuthPage.openLogin()
})

Then('I should see the DAX login UI', async () => {
	await daxAuthPage.seeLoginUi()
})

Given('I open the DAX store locator', () => {
	daxStoreLocatorPage.open()
})

Then('I should see the DAX store locator UI', async () => {
	await daxStoreLocatorPage.seeStoreLocator()
})

Given('I open the DAX billing portal', () => {
	daxBillingPage.open()
})

Then('I should see the DAX billing portal options', async () => {
	await daxBillingPage.seeBillingPortal()
})

Feature: DAX public smoke coverage

  @smoke
  Scenario: Home page loads with public navigation and footer
    Given I open the DAX home page
    Then I should see the DAX public header
    When I open the DAX departments menu
    Then I should see the DAX main departments
    And I should see the DAX public footer

  @smoke
  Scenario: Search for a public catalog term
    Given I open the DAX home page
    When I search DAX for "labial"
    Then I should see DAX search results for "labial"

  @smoke
  Scenario: Makeup catalog exposes public product listing
    Given I open the DAX makeup catalog
    Then I should see the DAX makeup listing

  @smoke
  Scenario: Product detail is reachable from a public listing
    Given I open the DAX makeup catalog
    When I open the first DAX product from the listing
    Then I should see the DAX product detail

  @smoke
  Scenario: Empty cart can be viewed without checkout
    Given I open the DAX empty cart
    Then I should see the DAX empty cart state

  @smoke
  Scenario: Login screen shows only non-submitted public UI
    Given I open the DAX login page
    Then I should see the DAX login UI

  @smoke
  Scenario: Store locator shows public store information
    Given I open the DAX store locator
    Then I should see the DAX store locator UI

  @smoke
  Scenario: External billing portal shows public options
    Given I open the DAX billing portal
    Then I should see the DAX billing portal options

Feature: Login on OrangeHRM

  Scenario Outline: Validate login with valid credentials
    Given I am on the OrangeHRM login page
    When I login with username "<usernameKey>" and password "<passwordKey>"
    When I click on login
    Then I should see "<result>"

    Examples:
      | usernameKey | passwordKey | result     |
      | username    | password    | dashboard  |
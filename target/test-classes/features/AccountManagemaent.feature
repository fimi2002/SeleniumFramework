Feature: Account Management

  @AccountManagement
  Scenario: Create An Account
    Given User on  Create Account Page
    When lUser enters first name
    And User enters last name
    And User enters Email

    And User enter password
    And User enter confirm password
    And User click submit
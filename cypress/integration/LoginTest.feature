Feature: Login

  I want to login into the admin panel 
  
  Scenario: Login: Failed scenarios
    Given access to the login page
    Given enter a valid email and a valid password
        |email|password|   
        |test|123123|
    Then submit and check the error

    Scenario: Login: Check home Screen Elements
    Given access to the login page
    Then check all left side elements



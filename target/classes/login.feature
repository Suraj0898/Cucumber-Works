@sanity @login
Feature: login feature

  Scenario: check if the user is valid login
    Given the application is working
    When the credentials are valid
    	| login | password | usertype |
    	| suraj | secret | developer |
    	| suraj123 | testing123 | admin |
    Then take user to home page

  Scenario: check if the user is invalid login
    Given the application is working
    When the credentials are "invalid"
    Then take user to login page

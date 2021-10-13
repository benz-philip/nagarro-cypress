/// <reference types="cypress" />

import { Given, Then } from 'cypress-cucumber-preprocessor/steps';
import LoginPage from '../page/LoginPage'

  // Scenario: success login
  Given('access to the login page',()=>{
    cy.visit('/')
  })
  Given('enter a valid email and a valid password',(datatable)=>{
    datatable.hashes().forEach(row => {
      LoginPage.fillEmail(row.email)
      LoginPage.fillPassword(row.password)
    })
    Then('submit and check the error',()=>{
        LoginPage.clickLoginButton()
        LoginPage.checkIfErrorDisplayed()
      })
      Then('check all left side elements',()=>{
        LoginPage.checkIfABOUTUSDisplayed()
        LoginPage.checkIfADMIN_PAGEDisplayed()
        LoginPage.checkIfLOCATIONSDisplayed()
        LoginPage.checkIfPRODUCTSDisplayed()
        LoginPage.checkIfSERVICESDisplayed()
        LoginPage.checkIfSolutionsDisplayed()

      })
  })
  
const EMAIL = '#loginPanel > form > div:nth-child(2) > input'
const PASSWORD = '#loginPanel > form > div:nth-child(4) > input'
const LOGIN_BUTTON = '#loginPanel > form > div:nth-child(5) > input'
const ERROR_MESSAGE = '#rightPanel > p'

const SOLUTIONS = '#headerPanel > ul.leftmenu > li.Solutions'
const ABOUTUS = '#headerPanel > ul.leftmenu > li:nth-child(2) > a'
const SERVICES = '#headerPanel > ul.leftmenu > li:nth-child(3) > a'
const PRODUCTS = '#headerPanel > ul.leftmenu > li:nth-child(4) > a'
const LOCATIONS = '#headerPanel > ul.leftmenu > li:nth-child(5) > a'
const ADMIN_PAGE = '#headerPanel > ul.leftmenu > li:nth-child(6) > a'


class LoginPage {

    static fillEmail(email){
        cy.get(EMAIL).clear().type(email)
    }
    static fillPassword(password){
        cy.get(PASSWORD).clear().type(password)
    }
    static clickLoginButton(){
        cy.get(LOGIN_BUTTON).click({force:true})
    }
    static checkIfErrorDisplayed(){
        cy.get(ERROR_MESSAGE).should('be.visible')
    }

    static checkIfSolutionsDisplayed(){
        cy.get(SOLUTIONS).should('be.visible')
    }
    static checkIfABOUTUSDisplayed(){
        cy.get(ABOUTUS).should('be.visible')
    }
    static checkIfSERVICESDisplayed(){
        cy.get(SERVICES).should('be.visible')
    }
    static checkIfPRODUCTSDisplayed(){
        cy.get(PRODUCTS).should('be.visible')
    }
    static checkIfLOCATIONSDisplayed(){
        cy.get(LOCATIONS).should('be.visible')
    }
    static checkIfADMIN_PAGEDisplayed(){
        cy.get(ADMIN_PAGE).should('be.visible')
    }
}

export default LoginPage 
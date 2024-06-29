describe('visit site', () => {
  it('passes', () => {
    cy.visit('https://psb.procure247.com/')
    cy.get('li:nth-child(4) a:nth-child(1) span:nth-child(2)').click()
    cy.get('#username').type('makerhardiksbi')
    cy.get('#password').type('Change@123')
    cy.get('#loginBtn').click()
    cy.wait(10000) // Waits for 8 seconds
    cy.get('#loginOtpBtn').click()
    cy.get(':nth-child(4) > .dropdown-toggle > div').click()
    cy.get('.open > .dropdown-menu > :nth-child(1) > .hvr-underline-from-center').click()
    cy.get('#custId').type('95632')


  })
})

Comando para executar o teste utilizando o mochawesome, que fornece relatorios sobre a execucao e com o --spec que permite executar apenas um teste, selecionando seu diretorio.
npx cypress run --reporter mochawesome --spec ".\cypress\e2e\tentativa-invalida-login.cy.js"

Linhas inseridas no cypress.config.js:
  video: true,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: false,
    timestamp: "mmddyyyy_HHMMss"
  },

  npm install --save-dev mochawesome
  
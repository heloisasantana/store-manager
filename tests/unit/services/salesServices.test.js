const { expect } = require('chai');
const sinon = require('sinon');
const salesServicesMock = require('../mocks/salesServicesMock');
const models = require('../../../src/models');
const services = require('../../../src/services');

describe('Testes da camada salesServices', function () {
  
  describe('Verificação da getAllSales', function () {
    it('Verificando se retorna todas as sales', async function () {
      sinon.stub(models.salesModels, 'getAllSales').resolves(salesServicesMock);
      const response = await services.salesServices.getAllSales();
      
      expect(response).to.be.deep.equal(salesServicesMock);
    });
  });

  afterEach(sinon.restore);
});
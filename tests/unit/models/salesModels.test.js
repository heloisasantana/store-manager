const { expect } = require('chai');
const sinon = require('sinon');
const salesModelsMock = require('../mocks/salesModelsMock');
const connection = require('../../../src/models/connection');
const models = require('../../../src/models');

describe('Testes da camada salesModels', function () {

  describe('Verificação da getAllSales', function () {
    it('Verificando se retorna todas as sales', async function () {
      sinon.stub(connection, 'execute').resolves([salesModelsMock]);
      const response = await models.salesModels.getAllSales();
      
      expect(response).to.deep.equal(salesModelsMock);
    });
  });

  describe('Verificação da getSaleFromID', function () {
    it('Verificando se retorna o esperado', async function () {
      sinon.stub(connection, 'execute').resolves([salesModelsMock[0]]);
      const response = await models.salesModels.getSaleFromID(1);
      
      expect(response).to.be.equal(salesModelsMock[0]);
    });
  });

  afterEach(sinon.restore);
});
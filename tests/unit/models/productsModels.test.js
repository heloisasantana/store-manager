const { expect } = require('chai');
const sinon = require('sinon');
const productsMock = require('../mocks/productsMock');
const connection = require('../../../src/models/connection');
const models = require('../../../src/models');

describe('Testes da camada productsModels', function () {

  describe('Verificação da getAllList', function () {
    it('Verificando se retorna todos os products', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);
      const response = await models.productsModels.getAllList();
      
      expect(response).to.deep.equal(productsMock);
    });
  });

  describe('Verificação da getFromID', function () {
    it('Verificando se retorna o esperado', async function () {
      sinon.stub(connection, 'execute').resolves([productsMock]);
      const response = await models.productsModels.getFromID(1);
      
      expect(response).to.be.equal(productsMock[0]);
    });
  });

  afterEach(sinon.restore);
});
const { expect } = require('chai');
const sinon = require('sinon');
const productsMock = require('../mocks/productsMock');
const models = require('../../../src/models');
const services = require('../../../src/services');

describe('Testes da camada productsServices', function () {

  describe('Verificação da getAllProducts', function () {
    it('Verificando se retorna todos os products', async function () {
      sinon.stub(models.productsModels, 'getAllList').resolves(productsMock);
      const response = await services.productsServices.getAllProducts();

      expect(response).to.deep.equal(productsMock);
    });
  });

  afterEach(sinon.restore);
});
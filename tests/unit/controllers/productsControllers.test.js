const { expect } = require('chai');
const sinon = require('sinon');
const productsMock = require('../mocks/productsMock');
const services = require('../../../src/services');
const controllers = require('../../../src/controllers');

const HTTP_OK_STATUS = 200;

describe('Testes da camada productsControllers', function () {

  describe('Verificação da getAllProducts', function () {
    it('Verificando se retorna todos os products', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services.productsServices, 'getAllProducts').resolves(productsMock);

      await controllers.productsControllers.getAllProducts(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(response.json.calledWith(productsMock)).to.be.equal(true);
    });
  });

  describe('Verificação da getProductFromID', function () {
    it('Verificando se retorna o esperado', async function () {
      const request = {
        params: { id: 1 },
      };
      const response = {};
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services.productsServices, 'getProductFromID').resolves(productsMock[0]);

      await controllers.productsControllers.getProductFromID(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(response.json.calledWith(productsMock[0])).to.be.equal(true);
    });
  });

  afterEach(sinon.restore);
});

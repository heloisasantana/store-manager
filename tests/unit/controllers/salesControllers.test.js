const { expect } = require('chai');
const sinon = require('sinon');
const salesControllersMock = require('../mocks/salesControllersMock');
const services = require('../../../src/services');
const controllers = require('../../../src/controllers');

const HTTP_OK_STATUS = 200;

describe('Testes da camada salesControllers', function () {
  
  describe('Verificação da getAllSales', function () {
    it('Verificando se retorna todas as sales', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services.salesServices, 'getAllSales').resolves(salesControllersMock);

      await controllers.salesControllers.getAllSales(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(response.json.calledWith(salesControllersMock)).to.be.equal(true);
    });
  });

  describe('Verificação da getSaleFromID', function () {
    it('Verificando se retorna o esperado', async function () {
      const request = {
        params: { id: 1 },
        body: {},
      };
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(services.salesServices, 'getSaleFromID').resolves(salesControllersMock[0]);

      await controllers.salesControllers.getSaleFromID(request, response);

      expect(response.status.calledWith(HTTP_OK_STATUS)).to.be.equal(true);
      expect(response.json.calledWith(salesControllersMock[0])).to.be.equal(true);
    });
  });

  afterEach(sinon.restore);
});
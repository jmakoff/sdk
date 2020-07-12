const Sdk = require('../index.js')
describe('List payments', function () {
  describe('#listPayments', function () {
    it('should give payments list', async function (done) {
      const sdk = new Sdk({
        url: 'https://5f0983d0445d08001669209d.mockapi.io/v1/',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      const list = await sdk.listPayments()
      done()
    });
  });
});
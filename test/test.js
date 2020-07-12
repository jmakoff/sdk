import Sdk  from '../index.js'
describe('List payments', function () {
  this.timeout(5000);
    it('should give payments list', async function () {
      const sdk = new Sdk({
        url: 'https://5f0983d0445d08001669209d.mockapi.io/v1/',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      const list = await sdk.listPayments()
    });
    it('should create payment', async function () {
      const sdk = new Sdk({
        url: 'https://5f0983d0445d08001669209d.mockapi.io/v1/',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      sdk.createPayment({
        "payeeId": "cf1921f3-7912-4b3d-8fdb-dcb9733aa994",
        "payerId": "0499974e-9325-43b1-9cff-57c957e9a337",
        "paymentSystem": "sber",
        "paymentMethod": "PMB","amount": "100.42",
        "currency": "USD",
        "comment": "Food"
      })
    });
});
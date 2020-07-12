import Sdk  from '../index.js'
describe('List payments', function () {
  this.timeout(5000);
    it('should give payments list', async function () {
      const sdk = new Sdk({
        url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      const list = await sdk.listPayments()
    });

    it('should create payment', async function () {
      const sdk = new Sdk({
        url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
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

    it('should fetch payment', async function () {
      const sdk = new Sdk({
        url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      sdk.getPayment(10)
    });

    it('should approve payment', async function () {
      const sdk = new Sdk({
        url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      sdk.approvePayment(10)
    });

    it('should cancel payment', async function () {
      const sdk = new Sdk({
        url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
        credentials: {username: "cool_business", password: "s3cur3passw0rd"}
      })
      sdk.cancelPayment(10)
    });
});
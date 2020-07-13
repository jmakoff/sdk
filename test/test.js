import Sdk from '..'

describe('Test api', function () {
	this.timeout(5000)
	const baseUrl = 'https://solitary-resonance-3442.getsandbox.com:443/v1'
	it('should give payments list', async () => {
		const sdk = new Sdk({
			url: baseUrl,
			credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
		})
		return sdk.listPayments()
	})

	it('should create payment', async () => {
		const sdk = new Sdk({
			url: baseUrl,
			credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
		})
		return sdk.createPayment({
			payeeId: 'cf1921f3-7912-4b3d-8fdb-dcb9733aa994',
			payerId: '0499974e-9325-43b1-9cff-57c957e9a337',
			paymentSystem: 'sber',
			paymentMethod: 'PMB', amount: '100.42',
			currency: 'USD',
			comment: 'Food'
		})
	})

	it('should fetch payment', async () => {
		const sdk = new Sdk({
			url: baseUrl,
			credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
		})
		return sdk.getPayment(10)
	})

	it('should approve payment', async () => {
		const sdk = new Sdk({
			url: baseUrl,
			credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
		})
		return sdk.approvePayment(10)
	})

	it('should cancel payment', async () => {
		const sdk = new Sdk({
			url: baseUrl,
			credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
		})
		return sdk.cancelPayment(10)
	})
})

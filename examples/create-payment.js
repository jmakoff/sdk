import Sdk from '..'

const mySdk = new Sdk({
	url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
	credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
})

mySdk.createPayment({
	payeeId: 'cf1921f3-7912-4b3d-8fdb-dcb9733aa994',
	payerId: '0499974e-9325-43b1-9cff-57c957e9a337',
	paymentSystem: 'sber',
	paymentMethod: 'PMB', amount: '100.42',
	currency: 'USD',
	comment: 'Food'
}).then(answer => {
	console.log(answer)
})

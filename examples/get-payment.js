import Sdk from '..'

const mySdk = new Sdk({
	url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
	credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
})

mySdk.getPayment(2).then(resp => {
	console.log(resp)
})

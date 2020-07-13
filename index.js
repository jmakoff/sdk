import axios from 'axios'
import authentficate from './methods/authentificate'
import checkAuthAndCall from './infra/check-auth-and-call'
import listPayments from './methods/list-payments'
import createPayment from './methods/create-payment'
import getPayment from './methods/get-payment'
import approvePayment from './methods/approve-payment'
import cancelPayment from './methods/cancel-payment'

function InitSdk({url, credentials}) {
	this.credentials = credentials

	axios.defaults.baseURL = url
	axios.defaults.headers['Content-Type'] = 'application/json'

	const methods = {authentficate}
	const methodsWithAuth = [
		listPayments,
		createPayment,
		getPayment,
		approvePayment,
		cancelPayment
	]
	methodsWithAuth.forEach(method => {
		methods[method.name] = checkAuthAndCall.bind(this, method)
	})

	return methods
}

export default InitSdk

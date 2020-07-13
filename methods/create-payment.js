import request from '../infra/request'

const createPayment = async function (data) {
	const payments = await request.call(this, {
		method: 'POST',
		path: '/payments',
		options: {data}
	})
	return payments
}

export default createPayment

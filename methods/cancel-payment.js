import request from '../infra/request'

const cancelPayment = async function (id) {
	const payment = await request.call(this, {
		method: 'put',
		path: `/payments/${id}/cancel`
	})
	return payment
}

export default cancelPayment

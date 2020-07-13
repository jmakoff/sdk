import request from '../infra/request'

const approvePayment = async function (id) {
	const payment = await request.call(this, {
		method: 'put',
		path: `/payments/${id}/approve`
	})
	return payment
}

export default approvePayment

import request from '../infra/request'

const getPayment = async function (id) {
	const payments = await request.call(this, {
		method: 'get',
		path: `/payment/${id}`
	})
	return payments
}

export default getPayment

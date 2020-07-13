import request from '../infra/request'

const listPayments = async function () {
	const payments = await request.call(this, {
		method: 'get',
		path: '/payments'
	})
	return payments
}

export default listPayments

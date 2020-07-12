import request from '../infra/request'

const listPayment = async () => {
  const options = {
    headers: {
      Authorization: `Bearer ${this.authData.token}`
    }
  }
  const payments = await request({
    method: 'get',
    path: '/v1/payments',
    options,
  })
  return payments
}

export default listPayment
import request from '../infra/request'

const listPayments = async function() {
  const options = {
    headers: {
      Authorization: `Bearer ${this.authData.authToken}`
    }
  }
  const payments = await request.call(this, {
    method: 'get',
    path: '/payments',
    options,
  })
  return payments
}

export default listPayments
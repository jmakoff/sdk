import request from '../infra/request'

const authentificate = async () =>  {
  console.log(`start authenticate procedure with name ${username} and password: ${password}`)
  const method = '/authenticate'
  this.authData = await request({method, credentials: this.credentials})
  console.log(`auth data: ${this.authData}`)
  return this.authData
}

export default authentificate
import request from '../infra/request'

const authentificate = async function () {
	const {username, password} = this.credentials
	const method = 'post'
	const path = '/authenticate'
	const requestOptions = {
		data: this.credentials
	}
	this.authData = await request.call(this, {method, path, options: requestOptions})
	return this.authData
}

export default authentificate

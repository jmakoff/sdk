import authentficate from '../methods/authentificate'

const checkAuthAndCall = async function (method, options = {}) {
	if (!this.authData || !this.authData.expiresIn || this.authData.expiresIn <= Date.now()) {
		await authentficate.call(this)
	}

	return method.call(this, options)
}

export default checkAuthAndCall

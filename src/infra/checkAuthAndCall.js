const checkAuthAndCall = function (method, options = {}) {
  if (!authData || !authData.expiresIn || authData.expiresIn <= Date.now() ) {
    this.authenticate()
  }
  return method(options)
}

export default checkAuthAndCall
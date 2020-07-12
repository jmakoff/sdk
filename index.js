import authenticate from './src/methods/authentificate'
import checkAuthAndCall from './src/infra/checkAuthAndCall'
import listPayments from './src/methods/listPayments'

async function InitSdk ({url, credentials}) {
    this.url = url
    this.credentials = credentials
    this.authenticate = authenticate
    await authenticate()
    const methodsWithAuth = [
        'listPayments',
        'createPayment'
    ].map(method => checkAuthAndCall.bind(this, method))

    return {
        authenticate,
        ...methodsWithAuth
    }
};

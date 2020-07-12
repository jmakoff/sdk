import axios from 'axios'
import authentficate from './src/methods/authentificate'
import checkAuthAndCall from './src/infra/checkAuthAndCall'
import listPayments from './src/methods/listPayments'
import createPayment from './src/methods/createPayment'

function InitSdk ({url, credentials}) {
    this.credentials = credentials
    this.authentficate = authentficate

    axios.defaults.baseURL = url
    const methods = {}
    const methodsWithAuth = [
        listPayments,
        createPayment
    ].forEach(method => {
        methods[method.name] = checkAuthAndCall.bind(this, method)
    })

    return methods
};

export default InitSdk

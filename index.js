import axios from 'axios'
import authentficate from './src/methods/authentificate'
import checkAuthAndCall from './src/infra/checkAuthAndCall'
import listPayments from './src/methods/listPayments'
import createPayment from './src/methods/createPayment'
import getPayment from './src/methods/getPayment'
import approvePayment from './src/methods/approvePayment'
import cancelPayment from './src/methods/cancelPayment'


function InitSdk ({url, credentials}) {
    this.credentials = credentials
    this.authentficate = authentficate

    axios.defaults.baseURL = url
    axios.defaults.headers['Content-Type'] = 'application/json'

    const methods = {}
    const methodsWithAuth = [
        listPayments,
        createPayment,
        getPayment,
        approvePayment,
        cancelPayment,
    ].forEach(method => {
        methods[method.name] = checkAuthAndCall.bind(this, method)
    })

    return methods
};

export default InitSdk

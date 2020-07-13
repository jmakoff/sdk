# This is SDK for API

## List of availiable methods
* ```listPayments()``` - Returns the list of existing payments.
* ```createPayment(paymentObject)``` - Creates a new payment
* ```getPayment(paymentId)``` - Returns an existing payment
* ```approvePayment(paymentId)``` - Approves a payment, effectively it moves money from a payer account
* ```cancelPayment(paymentId)``` - Cancels a created payment that hasn’t been approved yet.

### How to use
1. Call sdk as a constructor with object containing credentials and url
1. On it instance call method which you need (sdk will take care of authorizing)

### Usage example:
```
import Sdk from ...

const mySdk = new Sdk({
  url: 'https://solitary-resonance-3442.getsandbox.com:443/v1',
  credentials: {username: 'cool_business', password: 's3cur3passw0rd'}
})

mySdk.getPayment(2).then(resp => {
  console.log(resp)
})
```
***Other usage examples you can find in ```/examples```***

### Tests
**To run tests:**
* clone repo
* run ```npm i``` in console
    * change server baseUrl if needed in ```/test/test.js```
* run ```npm run test``` in console
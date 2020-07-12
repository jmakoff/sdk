import Sdk from '../index.js'

const mySdk = new Sdk({
  url: 'https://5f0983d0445d08001669209d.mockapi.io/v1/',
  credentials: {username: "cool_business", password: "s3cur3passw0rd"}
})
const list = mySdk.listPayments().then(list => {
  console.log(list)
  process.exit()
})
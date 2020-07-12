import axios from 'axios'

const request = async function ({method = 'get', path, options}) {
  const requestConfig = {
    method,
    path,
    baseUrl: this.url,
    headers: options.headers,
    data: options.data,
  }
  return axios.getUri(requestConfig)
    .then(response => response.data)
    .catch(err => {
      console.log(`Error occured while request with options ${requestConfig}`)
      throw err
    })
}
export default request
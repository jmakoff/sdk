import axios from 'axios'

const request = async function ({ method = 'get', path, options = {} }) {
  console.log(this)
  const requestConfig = {
    method,
    url: path,
    ...options
  }
  return axios.request(requestConfig)
    .then(response => response.data)
    .catch(error => {
      console.log(error.request);
      console.log(`Error occured while request with options ${error}`)
      throw error
    })
}
export default request
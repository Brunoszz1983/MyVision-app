import axios from 'axios'
const baseUrl = 'http://localhost:3002/visions'

const getVisionById = (userId) => {
 const request = axios.get(`${baseUrl}/v${userId}`)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.patch(`${baseUrl}/v${id}`, newObject)
  return request.then(response => response.data)
}

export default { getVisionById, create, update }
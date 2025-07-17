import axios from 'axios'
const baseUrl = 'http://localhost:3002/users'

const getUserById = (userId) => {
 const request = axios.get(`${baseUrl}/${userId}`)
  return request.then(response => response.data)
}

const create = newObject => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const update = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

export default { getUserById, create, update }
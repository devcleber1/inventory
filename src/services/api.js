import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://192.168.100.165:3001',
})

apiCodeBurger.interceptors.request.use(async (config) => {
  const userData = await localStorage.getItem('inventory:userdata')
  const token = userData && JSON.parse(userData).token
  config.headers.Authorization = `Bearer ${token}`
  return config
})
export default apiCodeBurger

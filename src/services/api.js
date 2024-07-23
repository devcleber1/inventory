import axios from 'axios'

const apiCodeBurger = axios.create({
  baseURL: 'http://localhost:3001', // Somente o host aqui, sem a rota específica
})

export default apiCodeBurger

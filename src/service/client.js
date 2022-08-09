import axios from 'axios'
import env from 'react-dotenv'

const getURLBackend = () => {
  if (env) {
    const { URL_BACKEND } = env
    localStorage.setItem('service', URL_BACKEND)
    return URL_BACKEND
  }
}
export const client = axios.create({
  baseURL: getURLBackend()
})

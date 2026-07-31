import api from './api'

export async function sendContactMessage(payload) {
  const response = await api.post('/contact-messages', payload)
  return response.data
}

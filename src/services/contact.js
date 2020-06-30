const BASE_URL = process.env['REACT_APP_REMOTE_API_BASE_URL'];
const CONTACT_PATH = '/contact';
const CONTACT_URL = BASE_URL + CONTACT_PATH;

export const postMessage = async (messageData) => {
  try {
      const response = await fetch(CONTACT_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json;charset=utf-8' },
          body: JSON.stringify(messageData)
      })

      if (!response.ok) throw new Error(response.statusText)

      return response.json()
  } catch(error) {
      console.error(error)
  }
}
import './style.scss'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './shared/contexts/DarkMode.tsx'

const APP_URL = import.meta.env.VITE_APP_URL
const APP_VERSION = import.meta.env.VITE_APP_VERSION

function urlParams(path: URL, params?: Record<string, string | number>) {
  const ENDPOINT = APP_URL + APP_VERSION + path
  const baseUrl = new URL(ENDPOINT)
  params && Object.entries(params).forEach(([k, v]) => {
    k != undefined && v != undefined && baseUrl.searchParams.append(k, v + '')
  })
  return baseUrl.toString()
}

const { fetch: originalFetch } = window;
window.fetch = async (...[url, config]: Parameters<typeof originalFetch>): Promise<Response> => {
  const token = localStorage.getItem('token')
  console.log(urlParams(url as URL))
  const response = await originalFetch(urlParams(url as URL), {
    ...(config || {}),
    headers: {
      'Accept': 'application/json', // TODO: CHANGE application/json when for file/download 
      'Content-type': 'application/json',
      ...(config?.headers || {}),
      ...(token != null ? { 'Authorization': `Bearer ${JSON.parse(token)}` } : {}),
    }
  })

  const data = await response.clone().json()

  if (!(response.status >= 200 && response.status <= 205)) return Promise.reject(data)
  response.json = () => data
  return Promise.resolve(response);
}

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

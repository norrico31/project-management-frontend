import './style.css'
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

type FetchType = <T>(url: string, config?: RequestInit) => Promise<T>;

const fetchTypeResponse: FetchType = async <T,>(...[url, config]: Parameters<typeof originalFetch>): Promise<T> => {
  const token = localStorage.getItem('token')
  const response = await originalFetch(url, {
    ...(config || {}),
    headers: {
      'Accept': 'application/json', // TODO: CHANGE application/json when for file/download 
      'Content-type': 'application/json',
      ...(config?.headers || {}),
      ...(token != null ? { 'Authorization': `Bearer ${JSON.parse(token)}` } : {}),
    }
  })

  const data = await response.json()
  if (!(response.status >= 200 && response.status <= 205)) return Promise.reject(data)
  return data;
}

const { fetch: originalFetch } = window;
window.fetch = fetchTypeResponse as unknown as typeof originalFetch

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

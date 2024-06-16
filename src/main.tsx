import './style.scss'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import ThemeProvider from './shared/contexts/DarkMode.tsx'

createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)

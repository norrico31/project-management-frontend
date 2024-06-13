import './shared/style.scss'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MuiThemeProvider from './shared/contexts/Themes.tsx'

createRoot(document.getElementById('root')!).render(
  <MuiThemeProvider>
    <App />
  </MuiThemeProvider>
)

import './shared/style.scss'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import MuiThemeProvider from './shared/contexts/Themes.tsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <MuiThemeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MuiThemeProvider>
)

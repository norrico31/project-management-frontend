import Button from '@mui/material/Button'
import { useThemeCtx } from './shared/contexts/Themes'

function App() {
  const { toggleColorMode } = useThemeCtx()
  return (
    <div style={{ minHeight: '100svh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }} >

      <Button onClick={toggleColorMode} variant='contained'>
        toggle theme
      </Button>
    </div>
  )
}

export default App

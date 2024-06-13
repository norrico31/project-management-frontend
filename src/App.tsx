import Button from '@mui/material/Button'
import { useThemeCtx } from './shared/contexts/Themes'
import Topbar from './shared/components/Layout/Topbar'

function App() {
  const { toggleColorMode } = useThemeCtx()
  return (
    <>
      <Topbar />
    </>
  )
}

export default App

import { useThemeCtx } from './shared/contexts/Themes'
import Layout from './shared/components/Layout/Layout'

function App() {
  const { toggleColorMode } = useThemeCtx()
  return (
    <>
      <Layout />
    </>
  )
}

export default App

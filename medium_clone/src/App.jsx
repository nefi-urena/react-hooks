import {Outlet} from 'react-router'
import TopBar from './components/topbar'

function App() {
  return (
    <>
      <TopBar />
      <Outlet />
    </>
  )
}

export default App

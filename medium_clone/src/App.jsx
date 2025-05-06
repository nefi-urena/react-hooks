import {Outlet} from 'react-router'
import TopBar from './components/topbar'
import {CurrentUserProvider} from './contexts/currentUser'
import CurrentUserChecker from './components/currentUserChecker'

function App() {
  return (
    <CurrentUserProvider>
      <CurrentUserChecker>
        <TopBar />
        <Outlet />
      </CurrentUserChecker>
    </CurrentUserProvider>
  )
}

export default App

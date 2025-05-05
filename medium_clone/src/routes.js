import {createBrowserRouter} from 'react-router'
import App from './App.jsx'
import GlobalFeed from './pages/globalFeed'
import Article from './pages/article'
import Authentication from './pages/authentication/index.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {index: true, Component: GlobalFeed},
      {path: 'articles/:slug', Component: Article},
      {path: '/login', Component: Authentication},
    ],
  },
])

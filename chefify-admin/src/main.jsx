import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Login from './pages/Login.jsx'
import Projects from './pages/Projects.jsx'
import Teams from './pages/Teams.jsx'
import Analytics from './pages/Analytics.jsx'
import Messages from './pages/Messages.jsx'
import Integrations from './pages/Integrations.jsx'
import NotFound from './pages/NotFound.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {element: <App />,
    children: [
      {path: '/',
        element: <Dashboard />,
      },
      {path: '/projects',
        element: <Projects />,
      },
      {path: '/teams',
        element: <Teams />,
      },
      {path: '/analytics',
        element: <Analytics />,
      },
      {path: '/messages',
        element: <Messages />,
      },
      {path: 'integrations',
        element: <Integrations />,
      }
    ]
  },
  {path: '/login',
    element: <Login />,
  },
  {path: '/*',
    element: <NotFound />,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)

import { createRoot } from 'react-dom/client'
import { RouterProvider, createHashRouter } from "react-router-dom"
import './index.css'
import Root from './routes/Root.jsx'
import Home from './routes/Home.jsx'
import About from './routes/About.jsx'
import Pokemon from './routes/Pokemon.jsx'

const router = createHashRouter([
  {
      path: "/",
      element: <Root />,
      children: [
            {
              path: "/",
              element: <Home />,
            },
            {
              path: "/about",
              element: <About />,
            },
            {
              path: "/pokemon/:id",
              element: <Pokemon />,
            }
      ],
  },
])

const root = createRoot(document.getElementById('root'))
root.render(<RouterProvider router={router}/>)

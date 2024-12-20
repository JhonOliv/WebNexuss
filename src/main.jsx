import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './pages/login.jsx'
import PainelBlog from './pages/painelBlog.jsx'
import InsertArticle from './pages/insertArticle.jsx'
import UpdateArticle from './pages/updateArticle.jsx'

const router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />
  },

  {
    path: "/",
    element: <PainelBlog />,
    children: [
      {
        path: "insertArticle",
        element: <InsertArticle />
      },
      {
        path: "updateArticle",
        element: <UpdateArticle />
      },
    ]
  },


])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)

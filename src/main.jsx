import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login.jsx'
import PainelBlog from './pages/painelBlog.jsx'
import InsertArticle from './pages/insertArticle.jsx'
import UpdateArticle from './pages/updateArticle.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)

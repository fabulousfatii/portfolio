import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import {Route,Routes} from "react-router-dom"
import './index.css'
import App from './App'
import Layout from './Layout'
import Blogapp from './pages/Blogapp'
import Ecommerce from './pages/Ecommerce'

createRoot(document.getElementById('root')).render(
 <BrowserRouter>
 <Routes>
 <Route path="/" element={<App />} />
   <Route path="/blogwebsite" element={<Blogapp/>} />
   <Route path="/ecomerce" element={<Ecommerce />} />
 </Routes>
 </BrowserRouter>
)

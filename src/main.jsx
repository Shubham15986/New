import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Product from './component/product.jsx'



import Card from './component/card.jsx'
import App from './App.jsx'
import BgChanger from './component/bgChanger.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  
    <BgChanger/>


    
    
  </StrictMode>,
)

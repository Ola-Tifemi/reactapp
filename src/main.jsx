import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PostProvider } from "./context/PostContext"
import { ProductProvider } from './context/ProductContext.jsx'
import App from './App.jsx'
import App2 from './App2.jsx'
import Bank from './Bank.jsx'
import Test from './Test.jsx'
import Invento from './invento.jsx'
import Layout from './blog/Layout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PostProvider>
        <App />
    </PostProvider> */}
    <Layout/>

    {/* <ProductProvider>
    <Invento/>
    </ProductProvider> */}
    

  </StrictMode>,
)
// This code imports the necessary modules and renders the Test component inside a StrictMode wrapper.
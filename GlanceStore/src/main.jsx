import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { YMaps } from '@pbe/react-yandex-maps';
import './index.css'
import App from './app/App.jsx'
import store from '../src/app/store/store.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
</Provider>
  </StrictMode>,
)

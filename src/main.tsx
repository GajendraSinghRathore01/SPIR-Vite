import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './redux/store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
     <Provider store={store}>

      <PersistGate loading={null} persistor={persistor}>
          <App />
          </PersistGate>
     </Provider>

    </BrowserRouter>
  </StrictMode>,
)

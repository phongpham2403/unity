import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import GlobalStyles from './components/GlobalStyles'
import { HideProvider } from './context/HideContext'
import { ShowProvider } from './context/ShowNaBar'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <HideProvider>
            <ShowProvider>
                <GlobalStyles>
                    <App />
                </GlobalStyles>
            </ShowProvider>
        </HideProvider>
    </React.StrictMode>
)

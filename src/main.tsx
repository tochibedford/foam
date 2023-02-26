import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'
import './font/stylesheet.scss'
import ThemeContext from './context/Theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ThemeContext.Provider value={0}>
      <App />
    </ThemeContext.Provider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './contextExercise/App'
//import App from './App'
import './index.css'
import ThemeProvider from './contextExercise/ThemeContext'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>

      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

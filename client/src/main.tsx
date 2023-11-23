import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Context Provider
import { ExerciseContextProvider } from './context/ExerciseContextProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ExerciseContextProvider>
      <App />
    </ExerciseContextProvider>
  </React.StrictMode>,
)

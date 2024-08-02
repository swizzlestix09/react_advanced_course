import React from "react"
import Header from "./Header"
import Button from "./Button"
import './index.css'

export const ThemeContext = React.createContext('')

export default function App() {
  return (
    <ThemeContext.Provider value="light">
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}


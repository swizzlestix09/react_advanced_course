import React, { useState } from "react"
import Header from "./Header"
import Button from "./Button"
import './index.css'

export const ThemeContext = React.createContext('')

export default function App() {
  const [colorTheme, setColorTheme] = useState('light')

  const changeColorTheme = () => {
    setColorTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')

  }

  return (
    <ThemeContext.Provider value={colorTheme}>
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}




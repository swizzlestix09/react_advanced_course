import React from "react"
import Header from "./Header"
import Button from "./Button"

export const ThemeContext = React.createContext('light')

export default function App() {
  return (
    <ThemeContext.Provider value="dark">
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeContext.Provider>
  )
}


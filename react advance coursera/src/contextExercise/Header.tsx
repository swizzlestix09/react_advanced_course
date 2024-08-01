import { useContext } from "react"
import { ThemeContext } from "./App"

export default function Header() {
  const value = useContext(ThemeContext)
  console.log('Value: ', value)
  return (
    <header className="dark-theme">
      <h1>Dark Theme</h1>
    </header>
  )
}
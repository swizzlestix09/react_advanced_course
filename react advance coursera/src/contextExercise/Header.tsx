import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"
import { capitalize } from "../assets/utils"

export default function Header() {
  const value = useContext(ThemeContext)
  const { colorTheme } = value;

  return (
    <header className={`${colorTheme}-theme`}>
      <h1>{colorTheme && `${capitalize(colorTheme)}`} Theme</h1>
    </header >
  )
}
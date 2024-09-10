import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export default function Button() {

  const { colorTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <button className={`${colorTheme}-theme`} onClick={toggleTheme}>
      Switch Theme
    </button>
  )
}
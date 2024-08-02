import { useContext } from "react"
import { ThemeContext } from "./App"
import { capitalize } from "../assets/utils"

export default function Header() {
  const value = useContext(ThemeContext)

  return (
    <header className={`${value}-theme`}>
      <h1>{`${capitalize(value)}`} Theme</h1>
    </header >
  )
}
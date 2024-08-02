import { useContext } from "react"
import { ThemeContext } from "./App"


export default function Button() {

  const value = useContext(ThemeContext)
  return (
    <button className={`${value}-theme`}>
      Switch Theme
    </button>
  )
}
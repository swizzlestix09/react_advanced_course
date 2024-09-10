import { ButtonHTMLAttributes, useContext } from "react"
import { ThemeContext } from "./ThemeContext"

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button(props: ButtonProps) {

  const { colorTheme, toggleTheme } = useContext(ThemeContext)
  return (
    <button className={`${colorTheme}-theme`} onClick={toggleTheme} {...props}>
      Switch Theme
    </button>
  )
}
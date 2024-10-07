
import { BsStar, BsStarFill } from "react-icons/bs"
import { ToggleContext } from "./toggle/Toggle"
import { useContext } from "react"

export default function Star() {
  const { toggleState, toggle } = useContext(ToggleContext)

  return (
    toggleState ?
      <BsStarFill className="star filled" onClick={toggle} /> :
      <BsStar className="star " onClick={toggle} />
  )
}
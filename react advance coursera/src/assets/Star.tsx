
import { BsStar, BsStarFill } from "react-icons/bs"
import { ToggleContext } from "./toggle/ToggleContext"
import { useContext } from "react"

export default function Star() {
  const { toggleState } = useContext(ToggleContext)

  return (
    toggleState ?
      <BsStarFill className="star filled" /> :
      <BsStar className="star " />
  )
}
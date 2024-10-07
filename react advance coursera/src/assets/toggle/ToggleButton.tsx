import { memo, useContext, ReactNode } from "react"
import { ToggleContext } from "./ToggleContext"

type Props = {
  children: ReactNode
}
const ToggleButton = memo(function ToggleButton({ children }: Props) {
  const { toggleState, toggle } = useContext(ToggleContext)
  console.log(toggleState)
  return (
    <div onClick={toggle}>
      {children}
    </div>
  )
})

export default ToggleButton
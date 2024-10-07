import { memo, useContext, ReactNode } from "react"
import { ToggleContext } from "./ToggleContext"

type Props = {
  children: ReactNode
}
const ToggleButton = memo(function ToggleButton({ children }: Props) {
  const { toggle } = useContext(ToggleContext)
  return (
    <div onClick={toggle}>
      {children}
    </div>
  )
})

export default ToggleButton
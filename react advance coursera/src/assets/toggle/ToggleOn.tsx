import { memo, ReactNode, useContext } from "react";
import { ToggleContext } from "./ToggleContext";


type Props = {
  children: ReactNode
}

const ToggleOn = memo(function ToggleOn({ children }: Props) {
  const { toggleState } = useContext(ToggleContext)

  return toggleState ? children : null
})

export default ToggleOn
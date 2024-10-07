import { memo, ReactNode, useContext } from "react";
import { ToggleContext } from "./ToggleContext";


type Props = {
  children: ReactNode
}

const ToggleOff = memo(function ToggleOff({ children }: Props) {
  const { toggleState } = useContext(ToggleContext)

  return toggleState ? null : children
})

export default ToggleOff
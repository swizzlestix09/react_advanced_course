import { FC, memo, ReactNode, } from "react";
import ToggleOn from "./ToggleOn";
import ToggleButton from "./ToggleButton";


import {
  ToggleThemeProvider
} from "./ToggleContext";

type Props = {
  children: ReactNode
}

const Toggle = memo(function Toggle({ children }: Props) {
  return (
    <ToggleThemeProvider>
      {children}
    </ToggleThemeProvider>
  )
})

interface ToggleComponents extends FC<{ children: ReactNode }> {
  ToggleOn: typeof ToggleOn;
  ToggleButton: typeof ToggleButton;
}

const ToggleWithComponents: ToggleComponents = Object.assign(Toggle, {
  ToggleOn: ToggleOn,
  ToggleButton: ToggleButton
})

export default ToggleWithComponents
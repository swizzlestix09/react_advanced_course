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
  On: typeof ToggleOn;
  Button: typeof ToggleButton;
}

const ToggleWithComponents: ToggleComponents = Object.assign(Toggle, {
  On: ToggleOn,
  Button: ToggleButton
})

export default ToggleWithComponents
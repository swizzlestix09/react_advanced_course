import { memo, ReactNode, } from "react";
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

export default Toggle
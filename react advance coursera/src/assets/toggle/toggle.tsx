import { memo, useState, ReactNode, createContext } from "react";

type Props = {
  children: ReactNode
}

type ToggleThemeProps = {
  children: ReactNode;
}

type ToggleContextType = {
  toggleState: boolean,
  toggle: () => void;
}

export const ToggleContext = createContext<ToggleContextType>({
  toggleState: false,
  toggle: () => { }
})

export function ToggleThemeProvider({ children }: ToggleThemeProps) {

  const [toggleState, setToogleState] = useState<boolean>(false);

  const toggle = () => setToogleState(prevState => !prevState)
  return (
    <ToggleContext.Provider value={{ toggleState, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}

const Toggle = memo(function Toggle({ children }: Props) {

  return (
    <ToggleThemeProvider>
      {children}
    </ToggleThemeProvider>
  )
})

export default Toggle
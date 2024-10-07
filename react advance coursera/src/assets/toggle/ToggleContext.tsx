import { useState, ReactNode, createContext } from "react";

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

  const toggle = () => {
    console.log('toggle triggered', toggleState)
    setToogleState(prevState => !prevState)
  }
  return (
    <ToggleContext.Provider value={{ toggleState, toggle }}>
      {children}
    </ToggleContext.Provider>
  )
}
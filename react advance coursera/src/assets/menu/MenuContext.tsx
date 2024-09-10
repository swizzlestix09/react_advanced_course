import { createContext, ReactNode, useState } from "react";


type MenuThemeProps = {
  children: ReactNode
}

type MenuContextType = {
  open: boolean,
  toggleMenu: () => void,
}

export const MenuContext = createContext<MenuContextType>({
  open: false,
  toggleMenu: () => { },
})

export default function MenuThemeProvider({ children }: MenuThemeProps) {
  const [open, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(prevOpen => !prevOpen)
    console.log('is this working?')
  }

  return (<MenuContext.Provider value={{ open, toggleMenu }}>
    {children}
  </MenuContext.Provider>)
}
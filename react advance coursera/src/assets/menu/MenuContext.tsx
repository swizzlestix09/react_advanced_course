import { createContext, ReactNode, useState } from "react";


type MenuThemeProps = {
  children: ReactNode;
};

type MenuContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextType>({
  isMenuOpen: false,
  toggleMenu: () => { },
});


export default function MenuThemeProvider({ children }: MenuThemeProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(prevOpen => !prevOpen)
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}
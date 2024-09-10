import { createContext, ReactNode, useState } from "react";


type ThemeProps = {
  children: ReactNode
}

type ThemeContextType = {
  colorTheme: string,
  toggleTheme: () => void,
}

export const ThemeContext = createContext<ThemeContextType>({
  colorTheme: 'light',
  toggleTheme: () => { },
})


export default function ThemeProvider({ children }: ThemeProps) {

  const [colorTheme, setColorTheme] = useState('light')

  const toggleTheme = () => {
    setColorTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ colorTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
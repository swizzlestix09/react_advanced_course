import Header from "./Header"
import Button from "./Button"
import './index.css'
import ThemeProvider from "./ThemeContext"
import Menu from "../assets/menu/Menu"
import MenuButton from "../assets/menu/MenuButton"
import MenuDropdown from "../assets/menu/MenuDropdown"
import MenuItem from "../assets/menu/MenuItem"
import MenuThemeProvider, { MenuContext } from "../assets/menu/MenuContext"
import { useContext } from "react"




export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  const { toggleMenu } = useContext(MenuContext)

  return (
    <ThemeProvider>
      <MenuThemeProvider>

        <Menu>
          <MenuButton onClick={toggleMenu}>Sports</MenuButton>
          <MenuDropdown>
            {sports.map(sport => (
              <MenuItem key={sport}>{sport}</MenuItem>
            ))}
          </MenuDropdown>
        </Menu>
        <div className="container dark-theme">
          <Header />
          <Button />
        </div>
      </MenuThemeProvider>
    </ThemeProvider>
  )
}




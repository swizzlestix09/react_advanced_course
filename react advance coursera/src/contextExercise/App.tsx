import Header from "./Header"
import Button from "./Button"
import './index.css'
import ThemeProvider from "./ThemeContext"
import Menu from "../assets/menu/Menu"
import MenuButton from "../assets/menu/MenuButton"
import MenuDropdown from "../assets/menu/MenuDropdown"
import MenuItem from "../assets/menu/MenuItem"

import MenuThemeProvider from "../assets/menu/MenuContext"





export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <ThemeProvider>
      <MenuThemeProvider>
        <Menu>
          <MenuButton>Sports</MenuButton>
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




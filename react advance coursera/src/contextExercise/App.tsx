import Header from "./Header"
import Button from "./Button"
import './index.css'
import { ThemeContext } from "./ThemeContext"
import Menu from "../assets/menu/Menu"
import MenuButton from "../assets/menu/MenuButton"
import MenuDropdown from "../assets/menu/MenuDropdown"
import MenuItem from "../assets/menu/MenuItem"

import MenuThemeProvider from "../assets/menu/MenuContext"
import { useContext } from "react"
import Toggle from "../assets/toggle/Toggle"

import { BsStar, BsStarFill } from "react-icons/bs"


export default function App() {
  const sports = ["Tennis", "Pickleball", "Racquetball", "Squash"]
  const { colorTheme } = useContext(ThemeContext)
  return (
    <MenuThemeProvider>
      <Menu>
        <MenuButton>Sports</MenuButton>
        <MenuDropdown>
          {sports.map(sport => (
            <MenuItem key={sport}>{sport}</MenuItem>
          ))}
        </MenuDropdown>
      </Menu>
      <div className={`container ${colorTheme}-theme h-fit`} >
        <Header />
        <Button />
      </div>
      <Toggle>
        <Toggle.Button>
          <Toggle.On>
            <BsStarFill className="star filled" />
          </Toggle.On>
          <Toggle.Off>
            <BsStar className="star " />
          </Toggle.Off>
        </Toggle.Button>
      </Toggle>
    </MenuThemeProvider >

  )
}




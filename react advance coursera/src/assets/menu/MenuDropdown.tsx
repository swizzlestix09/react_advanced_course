import { ReactNode, useContext } from "react"
import { MenuContext } from "./MenuContext"
type Props = {
  children: ReactNode,

}
export default function MenuDropdown({ children }: Props) {
  const { isMenuOpen } = useContext(MenuContext)

  return (
    <>
      {isMenuOpen && <div className="menu-dropdown">
        {children}
      </div>}
    </>

  )
}
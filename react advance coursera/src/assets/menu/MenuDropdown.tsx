import { ReactNode, useContext } from "react"
import { MenuProvider } from "./Menu"
type Props = {
  children: ReactNode,

}
export default function MenuDropdown({ children }: Props) {
  const open = useContext(MenuProvider)

  return (
    <>
      {open && <div className="menu-dropdown">
        {children}
      </div>}
    </>

  )
}
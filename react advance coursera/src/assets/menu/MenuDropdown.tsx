import { ReactNode, useContext } from "react"
import { MenuContext } from "./MenuContext"
type Props = {
  children: ReactNode,

}
export default function MenuDropdown({ children }: Props) {
  const { open } = useContext(MenuContext)
  console.log(open)
  return (
    <>
      {open && <div className="menu-dropdown">
        {children}
      </div>}
    </>

  )
}
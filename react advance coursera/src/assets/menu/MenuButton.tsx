import { ReactNode, useContext } from "react"
import Button from "../../Button"
import { MenuContext } from "./MenuContext"

type Props = {
  children: ReactNode,

}
export default function MenuButton({ children }: Props) {

  const { toggleMenu } = useContext(MenuContext)
  return (
    <Button onClick={toggleMenu}>{children}</Button>
  )
}
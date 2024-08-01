import { ReactNode } from "react"
import Button from "../../Button"

type Props = {
  children: ReactNode,
  onClick?: () => void,
  open?: boolean,
}
export default function MenuButton({ onClick, open, children }: Props) {
  console.log('In MenuButton: ', open)
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}
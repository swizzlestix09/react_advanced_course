import { ReactNode } from "react"
import Button from "../../Button"

type Props = {
  children: ReactNode,
  onClick?: () => void,
}
export default function MenuButton({ onClick, children }: Props) {
  return (
    <Button onClick={onClick}>{children}</Button>
  )
}
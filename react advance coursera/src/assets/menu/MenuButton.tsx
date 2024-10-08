import { ReactNode } from "react"
import Button from "../../Button"


type Props = {
  children: ReactNode,

}
export default function MenuButton({ children }: Props) {

  return (
    <Button >{children}</Button>
  )
}


// Use context explicitly, and where required. Do not pass down as prop. smh.
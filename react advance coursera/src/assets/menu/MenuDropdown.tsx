import { ReactNode } from "react"

type Props = {
  children: ReactNode,

}
export default function MenuDropdown({ children }: Props) {

  return (
    <>
      <div className="menu-dropdown">
        {children}
      </div>
    </>

  )
}
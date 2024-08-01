import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  open?: boolean,
  onClick?: () => void
}
export default function MenuDropdown({ open, children }: Props) {
  console.log('In MenuDropdown: ', open)

  return (
    <>
      {open && <div className="menu-dropdown">
        {children}
      </div>}
    </>

  )
}
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  open?: boolean,
}
export default function MenuDropdown({ open, children }: Props) {


  return (
    <>
      {open && <div className="menu-dropdown">
        {children}
      </div>}
    </>

  )
}
import { ReactNode } from "react"

type Props = {
  children: ReactNode,
  onClick?: () => void,
  open?: boolean,
}

export default function MenuItem({ open, children }: Props) {

  console.log('In MenuItem: ', open)
  return (
    <div className="menu-item">
      {children}
    </div>

  )
}
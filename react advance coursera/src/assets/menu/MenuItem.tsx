import { ReactNode } from "react"

type Props = {
  children: ReactNode,
}

export default function MenuItem({ children }: Props) {
  return (
    <div className="menu-item">
      {children}
    </div>

  )
}
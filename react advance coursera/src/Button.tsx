import { ReactNode } from "react";

type Props = {
  children: ReactNode
  handleClick: () => void
}
const Button = ({ handleClick, children }: Props) => {

  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button;
import { ReactNode } from "react";

type Props = {
  children: ReactNode
}
const Button = ({ children }: Props) => {

  const handleClick = () => console.log('Logging in...')
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

export default Button;
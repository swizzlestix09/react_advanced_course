import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const Button = ({ children, ...rest }: Props) => {

  return (
    <button {...rest}>{children}</button>
  )
}

export default Button;
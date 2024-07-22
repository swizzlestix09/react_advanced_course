import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

const Button = (props: Props) => {

  return (
    <button {...props}>{props.children}</button>
  )
}

export default Button;
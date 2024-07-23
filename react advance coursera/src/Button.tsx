import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode,
  size: string,
  color: string,
}

const Button = ({ children, color, size, ...rest }: Props) => {

  return (
    <button className={`${size} ${color}`} {...rest}> {children}</button >
  )
}

export default Button;
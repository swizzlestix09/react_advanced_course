import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode,
  size: string,
}

const Button = ({ children, size, ...rest }: Props) => {

  return (
    <button className={`button-${size}`} {...rest}> {children}</button >
  )
}

export default Button;
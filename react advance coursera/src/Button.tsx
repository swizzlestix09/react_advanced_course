import { ButtonHTMLAttributes, ReactNode } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: ReactNode,
  size?: string,
  color?: string,
  variant?: string,
}

/**
   * Challenge:
   *
   * Accept a `variant` prop and style the Button component
   * accordingly. The values can be `success`, `warning`, or `danger`.
   * Check the Figma design for the specific colors to be used for each
   * variant.
   */


const Button = ({ children, color, size, variant, ...rest }: Props) => {

  return (
    <button className={`${size} ${color} ${variant}`} {...rest}> {children}</button >
  )
}

export default Button;
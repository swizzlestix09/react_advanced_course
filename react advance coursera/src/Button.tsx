import { ReactNode } from "react";

type Props = {
  children: ReactNode
}
const Button = ({ children }: Props) => (
  <button>{children}</button>
)

export default Button;
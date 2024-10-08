
import { FC, ReactNode } from "react"
import MenuButton from "./MenuButton";
import MenuDropdown from "./MenuDropdown";
import MenuItem from "./MenuItem";

type Props = {
  children: ReactNode,
}

function Menu({ children }: Props) {

  return (
    <div className="menu">
      {children}
    </div>
  )
}

interface MenuComponent extends FC<{ children: React.ReactNode }> {
  Button: typeof MenuButton;
  Dropdown: typeof MenuDropdown;
  Item: typeof MenuItem;
}

const MenuWithComponents: MenuComponent = Object.assign(Menu, {
  Button: MenuButton,
  Dropdown: MenuDropdown,
  Item: MenuItem,
});

export default MenuWithComponents;


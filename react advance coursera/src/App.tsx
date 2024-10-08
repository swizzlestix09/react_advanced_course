import Button from './Button'
import MenuThemeProvider from './assets/menu/MenuContext';
import Menu from './assets/menu/index';
import { createContext } from 'react';

const urgencyNumber: number = 3;

const ColorTheme = createContext('light')

function App() {
  const buttonType = urgencyNumber;
  let buttonText = 'click me'

  switch (buttonType) {
    case 1:
      buttonText = 'Danger'
      break;
    case 2:
      buttonText = 'Warning'
      break;
    case 3:
      buttonText = 'Success'
      break;
    default:
      buttonText = 'Click Me'
  }

  /**
 * Challenge:
 * 1. Convert the Menu component to use props.children
 *    instead of taking an `items` prop. (We'll update
 *    the MenuButton and MenuDropdown components later.)
 *    See note inside the Menu.js file for more info
 *
 * 2. import MenuButton and MenuDropdown into THIS file
 *    and render them as children of the Menu component.
 *    Remember to pass the buttonText and items array to
 *    the components that need those props to function.
 *    (We'll also be updating that soon!)
 *
 * NOTE: The functionality of the menu will be broken after
 * these changes, but that's okay! As such, don't worry
 * about moving the state or toggle function from the Menu;
 * there's more we need to learn before we can do that.
 */

  const handleClick = () => console.log('Logging in...')
  const btnSize = 'button-large'
  const btnColor = 'green'
  const menuText = 'Sports';
  const menuItems = ["Tennis", "Pickleball", "Racquetball", "Squash"]

  return (
    <ColorTheme.Provider value="light">
      <main>
        <MenuThemeProvider>
          <Menu>
            <Menu.Button>
              {menuText}
            </Menu.Button>
            <Menu.Dropdown>
              {menuItems.map(item => <Menu.Item key={item}>{item}</Menu.Item>)}
            </Menu.Dropdown>
          </Menu>
        </MenuThemeProvider>
        <Button variant={buttonText.toLowerCase()} size={btnSize} color={btnColor} onClick={handleClick}>
          {buttonText}
        </Button>
      </main >
    </ColorTheme.Provider>
  )
}

export default App

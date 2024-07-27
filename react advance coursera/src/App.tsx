import Button from './Button'
import Avatar from './assets/Avatar';
import './App.css'
import Menu from './assets/menu/Menu';

const urgencyNumber: number = 3;

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

  return (
    <main>
      <Menu
        buttonText="Sports"
        items={["Tennis", "Pickleball", "Racquetball", "Squash"]}
      />
      <Button variant={buttonText.toLowerCase()} size={btnSize} color={btnColor} onClick={handleClick}>
        {buttonText}
      </Button>
      <Avatar src="/src/assets/image/zBWx8U01.svg" alt="Me" />
      <br />
      <Avatar src="/src/assets/image/bob.jpg" alt="Bob Marley" />
      <br />
      <Avatar>BZ</Avatar>
      <br />
      <Avatar />
    </main>
  )
}

export default App

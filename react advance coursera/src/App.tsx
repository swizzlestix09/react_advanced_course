import Button from './Button'
import './App.css'

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


  const handleClick = () => console.log('Logging in...')
  const btnSize = 'button-large'
  const btnColor = 'green'

  return (
    <main>
      <Button variant={buttonText.toLowerCase()} size={btnSize} color={btnColor} onClick={handleClick}>
        {buttonText}
      </Button>
    </main>
  )
}

export default App

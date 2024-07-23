import Button from './Button'
import './App.css'

function App() {
  const buttonText = 'click me'

  const handleClick = () => console.log('Logging in...')
  const btnSize = 'button-large'
  const btnColor = 'green'

  return (
    <main>
      <Button size={btnSize} color={btnColor} onClick={handleClick}>
        {buttonText}
      </Button>
    </main>
  )
}

export default App

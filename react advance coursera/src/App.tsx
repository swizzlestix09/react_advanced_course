import Button from './Button'
import './App.css'
import { FaMoneyBill } from 'react-icons/fa'

function App() {
  const buttonText = 'click me'

  const handleClick = () => console.log('Logging in...')
  const size = 'button-large'

  return (
    <main>
      <Button size={size} onClick={handleClick}>
        <FaMoneyBill />
        {buttonText}
      </Button>
    </main>
  )
}

export default App

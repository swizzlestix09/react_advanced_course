import Button from './Button'
import './App.css'
import { FaMoneyBill } from 'react-icons/fa'

function App() {
  const buttonText = 'click me'

  const handleClick = () => console.log('Logging in...')


  return (
    <main>
      <Button handleClick={handleClick}>
        <FaMoneyBill />
        {buttonText}
      </Button>
    </main>
  )
}

export default App

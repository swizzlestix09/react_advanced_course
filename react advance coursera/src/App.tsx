import Button from './Button'
import './App.css'
import { FaMoneyBill } from 'react-icons/fa'
function App() {
  const buttonText = 'click me'

  return (
    <main>
      <Button>
        <FaMoneyBill />
        {buttonText}
      </Button>
    </main>
  )
}

export default App

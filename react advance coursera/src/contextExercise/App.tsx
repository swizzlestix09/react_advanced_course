import Header from "./Header"
import Button from "./Button"
import './index.css'
import ThemeProvider from "./ThemeContext"




export default function App() {


  return (
    <ThemeProvider >
      <div className="container dark-theme">
        <Header />
        <Button />
      </div>
    </ThemeProvider>
  )
}




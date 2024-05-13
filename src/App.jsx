import { useState, useEffect } from 'react'
import { ThemeProvider } from './contexts/Theme.jsx'
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Card"

function App() {
  const [theme, setTheme] = useState("light")
  const changeDark = () => {
    setTheme("dark")
  }
  const changeLight = () => {
    setTheme("light")
  }

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark")
    document.querySelector("html").classList.add(theme)
  }, [theme])

  return (
    < ThemeProvider value={{ changeDark, changeLight, theme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeButton />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
 
export default App
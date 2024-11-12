
import './App.css'

import Hero from './components/Hero'
import Navbar from './components/navbar/navbar'
import Firstshow from './pages/products/popular/firstshow'

function App() {
  

  return (
    <>
      <div>
        <Navbar/>
        <Hero/>
        <Firstshow/>
      </div>
    </>
  )
}

export default App

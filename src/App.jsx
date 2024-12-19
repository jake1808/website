import './App.css'
import { NavBar } from './components/navBar/navBar'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
function App() {


  return (
<main className="flex flex-col  h-screen w-full bg-grey ">
  <NavBar/>
  <Hero/>
</main>
  )
}

export default App

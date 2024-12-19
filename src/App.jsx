import './App.css'
import { StickyNavbar } from './components/navbar'
import { About } from './sections/About'
import { Hero } from './sections/Hero'
function App() {


  return (
<main className="flex flex-col  h-screen w-full bg-grey ">
  <StickyNavbar/>
  <Hero/>
</main>
  )
}

export default App

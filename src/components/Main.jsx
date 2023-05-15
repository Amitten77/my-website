import '../styles/main.css'
import Home from './mainComponents/Home'
import About from './mainComponents/About'
import Projects from './mainComponents/Projects'
import Other from './mainComponents/Other'
import Contact from './mainComponents/Contact'

const Main = () => {
  return (
    <main>
      <Home/>
      <About />
      <Projects />
      <Other />
      <Contact />
    </main>
  )
}

export default Main
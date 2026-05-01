import './App.css'
import ContactInfo from './Companents/ContactInfo'
import Home from './Companents/Home'
import Navbar from './Companents/Navbar'
import About from './Companents/about'
const App = () => {
  return (
    // maindiv
    <div>

      <>
        <Navbar />

        <section id="home">
          <Home />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="ContactInfo">
          <ContactInfo />
        </section>
      </>

    </div>
  )
}
export default App
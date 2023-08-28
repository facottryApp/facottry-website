import ContactForm from "../common/ContactForm"
import { Hero } from "./Hero"
import NavBar from "./NavBar"

export const LandingPage = () => {
  return (
    <div className="bg-white dark:bg-darkblue300">
      <div className="bg-bgblue dark:bg-darkblue py-8 px-8">
        <NavBar />

        <section id="about">
          <Hero />
        </section>
      </div>

      <section id="contact" className="mt-10 py-8 px-8">
        <ContactForm />
      </section>
    </div>
  )
}
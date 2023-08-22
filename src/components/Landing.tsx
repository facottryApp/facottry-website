import { Contact } from "./Contact"
import { Hero } from "./Hero"
import NavBar from "./NavBar"

export const LandingPage = () => {
  return (
    <div className="">
      <div className="bg-bgblue py-8 px-8">
        <NavBar />

        <section id="about">
          <Hero />
        </section>
      </div>

      <section id="contact" className="mt-10 py-8 px-8">
        <Contact />
      </section>
    </div>
  )
}
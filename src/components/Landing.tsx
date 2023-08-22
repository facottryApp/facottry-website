import { Hero } from "./Hero"
import NavBar from "./NavBar"

export const LandingPage = () => {
  return (
    <div className="h-screen py-8 px-8">
        <NavBar />

        <Hero />
    </div>
  )
}

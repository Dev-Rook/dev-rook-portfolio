
// Styles Import:
import "../styles/global.scss"

// Components Import:
import Hero from "../components/Hero"
import Bio from "../sections/Bio"
import Tech from "../sections/Tech"
import Work from "../sections/Work"
import Experience from "../sections/Experience"
import Posts from "../sections/Posts"
import ContactForm from "../components/ContactForm"

const Index = () => {
  const title = "Developer Rook"
  const subtitle = "Fullstack Developer"
  return (
    <div className='page'>
      <Hero title={title} subtitle={subtitle} />
      <Bio />
      <Work />
      {/* <Tech /> */}
      <Experience />
      <Posts />
      <ContactForm />
    </div>
  )
}

export default Index
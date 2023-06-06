
// Styles Import:
import "../styles/global.scss"

// Components Import:
import Hero from "../components/Hero"
import Bio from "../sections/Bio"
import Tech from "../sections/Tech"
import Work from "../sections/Work"
import Experience from "../sections/Experience"

const Index = () => {
  const title = "Developer Rook"
  return (
    <div className='page'>
      <Hero title={title} />
      <Bio />
      <Work />
      <Tech />
      <Experience />
    </div>
  )
}

export default Index
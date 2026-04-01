import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import ResearchOverview from '@/components/ResearchOverview'
import Pipeline from '@/components/Pipeline'
import ClinicalApplications from '@/components/ClinicalApplications'
import Consortium from '@/components/Consortium'
import Publications from '@/components/Publications'
import Funding from '@/components/Funding'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-surface min-h-screen">
      <Nav />
      <Hero />
      <ResearchOverview />
      <Pipeline />
      <ClinicalApplications />
      <Consortium />
      <Publications />
      <Funding />
      <Contact />
      <Footer />
    </main>
  )
}

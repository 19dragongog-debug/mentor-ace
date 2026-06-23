import HeroSection from './HeroSection'
import SuccessStats from './SuccessStats'
import StudentResults from './StudentResults'
import MentorStory from './MentorStory'
import Programs from './Programs'
import Roadmap from './Roadmap'
import Testimonials from './Testimonials'
import FreeResources from './FreeResources'
import FAQ from './FAQ'
import ContactForm from './ContactForm'

export default function Home() {
  return (
    <>
      <HeroSection />
      <SuccessStats />
      <StudentResults />
      <MentorStory />
      <Programs />
      <Roadmap />
      <Testimonials />
      <FreeResources />
      <FAQ />
      <ContactForm />
    </>
  )
}

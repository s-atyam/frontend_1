import AnnouncementBar from '@components/AnnouncementBar'
import Navbar from '@components/Navbar'
import MainSection from '@components/MainSection'
import LogoCloud from '@components/LogoCloud'
import Feature1 from '@components/Feature1'
import Feature2 from '@components/Feature2'
import Component1 from '@components/Component1'
import Testimonial from '@components/Testimonial'
import Action from '@components/Action'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <section>
      <AnnouncementBar/>
      <Navbar/>
      <MainSection/>
      <LogoCloud/>
      <Feature1/>
      <Feature2/>
      <Component1/>
      <Testimonial/>
      <Action/>
      <Footer/>
    </section>
  )
}

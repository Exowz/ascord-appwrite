

import CallToAction from "@/features/landing/call-to-actions";
import Changelog from "@/features/landing/changelog";
import Features from "@/features/landing/features";
import Footer from "@/features/landing/footer";
import Header from "@/features/landing/header";
import Hero from "@/features/landing/hero";
import Testimonials from "@/features/landing/testimonials";
import WhyAscord from "@/features/landing/why-ascord";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <WhyAscord />
      <Features />
      <Testimonials />
      <Changelog />
      <CallToAction />
      <Footer />
    </div>
  )
}

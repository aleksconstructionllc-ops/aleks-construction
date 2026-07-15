import Image from "next/image";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import EstimateForm from "@/components/EstimateForm";

export default function Home() {
  return (
    <main>

      {/* HERO SECTION */}
      <section id="home" className="relative h-screen w-full">

        {/* Background Image */}
        <Image
          src="/images/hero/hero-house.jpg"
          alt="Aleks Construction Home"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/55" />

        {/* Navigation */}
        <header className="fixed top-0 left-0 z-50 w-full bg-black/40 backdrop-blur-md border-b border-white/10">

          <div className="mx-auto flex max-w-7xl items-center justify-between px-10 py-8">

            <div className="flex items-center gap-4">

              <Image
                src="/logos/Aleks-logo.png"
                alt="Aleks Construction Logo"
                width={105}
                height={105}
              />

              <div>
                <h2 className="text-2xl font-bold text-white">
                  ALEKS CONSTRUCTION
                </h2>

                <p className="text-sm tracking-widest text-gray-300">
                  GENERAL CONTRACTOR
                </p>
              </div>

            </div>

            <nav className="hidden items-center gap-8 text-white md:flex">

              <a href="#home" className="transition hover:text-orange-400">
                Home
              </a>

              <a href="#services" className="transition hover:text-orange-400">
                Services
              </a>

              <a href="#about" className="transition hover:text-orange-400">
                About
              </a>

              <a href="#why-choose-us" className="transition hover:text-orange-400">
                Why Choose Us
              </a>

              <a href="#projects" className="transition hover:text-orange-400">
                Projects
              </a>

              <a href="#testimonials" className="transition hover:text-orange-400">
                Testimonials
              </a>

              <a href="#contact" className="transition hover:text-orange-400">
                Contact
              </a>

            </nav>

          </div>

        </header>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center pt-24">

          <div className="max-w-5xl px-6 text-center">

            <p className="mb-6 text-lg uppercase tracking-[0.4em] text-orange-400">
              Residential Construction
            </p>

            <h1 className="mb-8 text-6xl font-black leading-tight text-white md:text-8xl">
              Built to Last.
              <br />
              Crafted to Impress.
            </h1>

            <p className="mx-auto max-w-3xl text-xl leading-9 text-gray-200">
              Full-service remodeling, roofing, masonry, framing,
              kitchens, bathrooms, additions and complete interior &
              exterior renovations throughout New Jersey.
            </p>

            <div className="mt-12 flex flex-col justify-center gap-5 sm:flex-row">

              <a
  href="#estimate"
  className="rounded-lg bg-orange-500 px-10 py-4 text-lg font-bold text-white transition hover:bg-orange-600"
>
  Get Free Estimate
</a>

              <button className="rounded-lg border-2 border-white px-10 py-4 text-lg font-bold text-white transition hover:bg-white hover:text-black">
                View Projects
              </button>

            </div>

          </div>

        </div>

      </section>

      {/* SERVICES */}
      <Services />

      {/* ABOUT */}
      <About />

      {/* WHY CHOOSE US */}
      <WhyChooseUs />

      {/* PROJECTS */}
      <Projects />

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* ESTIMATE FORM */}
      <EstimateForm />

      {/* CONTACT */}
      <Contact />

      {/* FOOTER */}
      <Footer />
    </main>
  );
}
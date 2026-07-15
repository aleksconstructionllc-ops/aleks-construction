import {
  Phone,
  Mail,
  Clock3,
  MapPin,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-orange-500 to-orange-600 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="text-center">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-100">
            CONTACT ALEKS CONSTRUCTION
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Let's Build Your
            <br />
            Dream Project
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-white"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
            Whether you're planning a complete renovation, kitchen remodel,
            bathroom renovation, addition, roofing project, or new
            construction, we're here to help every step of the way.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">

          {/* Contact Info */}

          <div className="rounded-3xl bg-white p-10 shadow-2xl">

            <h3 className="mb-10 text-3xl font-black text-slate-900">
              Contact Information
            </h3>

            <div className="space-y-8">

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-orange-100 p-3">

                  <Phone
                    size={24}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Direct Contractor
                  </h4>

                  <a
                    href="tel:2014583098"
                    className="text-lg text-orange-500 hover:underline"
                  >
                    (201) 458-3098
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-orange-100 p-3">

                  <Phone
                    size={24}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Reception & Scheduling
                  </h4>

                  <a
                    href="tel:2012646985"
                    className="text-lg text-orange-500 hover:underline"
                  >
                    (201) 264-6985
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-orange-100 p-3">

                  <Mail
                    size={24}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h4 className="font-bold text-slate-900">
                    Email
                  </h4>

                  <a
                    href="mailto:aleksconstructionllc@gmail.com"
                    className="break-all text-orange-500 hover:underline"
                  >
                    aleksconstructionllc@gmail.com
                  </a>

                </div>

              </div>

              <div className="flex items-start gap-5">

                <div className="rounded-xl bg-orange-100 p-3">

                  <Clock3
                    size={24}
                    className="text-orange-500"
                  />

                </div>

                <div>

                  <h4 className="mb-4 font-bold text-slate-900">
                    Business Hours
                  </h4>

                  <p className="leading-8 text-slate-600">
                    Monday – Sunday
                    <br />
                    10:00 AM – 10:00 PM
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Service Areas */}

          <div className="rounded-3xl bg-slate-900 p-10 shadow-2xl">

            <h3 className="mb-10 text-3xl font-black text-white">
              Areas We Serve
            </h3>

            <div className="space-y-5">

              {[
                "Bergen County",
                "Essex County",
                "Hudson County",
                "Passaic County",
                "Morris County",
                "Union County",
                "Monmouth County",
                "Ocean County",
              ].map((county) => (

                <div
                  key={county}
                  className="flex items-center gap-4"
                >

                  <MapPin
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="text-lg text-white">
                    {county}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 rounded-2xl border border-orange-500 bg-orange-500/10 p-8">

              <div className="flex items-center gap-4">

                <ShieldCheck
                  size={32}
                  className="text-orange-500"
                />

                <h4 className="text-2xl font-bold text-white">
                  Licensed & Fully Insured
                </h4>

              </div>

              <p className="mt-5 leading-8 text-slate-300">
                We proudly deliver exceptional craftsmanship,
                transparent communication, dependable scheduling,
                and professional service on every project we complete.
              </p>

              <a
                href="#estimate"
                className="mt-8 inline-flex items-center gap-3 font-semibold text-orange-400 transition duration-300 hover:translate-x-2"
              >
                Request Free Estimate

                <ArrowRight
                  size={18}
                  strokeWidth={2.5}
                />

              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
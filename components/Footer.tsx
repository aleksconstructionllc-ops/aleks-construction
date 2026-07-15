import {
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-14 lg:grid-cols-4">

          {/* Company */}

          <div>

            <h2 className="text-4xl font-black text-orange-500">
              ALEKS
            </h2>

            <p className="-mt-1 text-xl font-semibold tracking-wider text-white">
              CONSTRUCTION LLC
            </p>

            <p className="mt-8 leading-8 text-slate-400">
              Aleks Construction LLC proudly provides premium residential
              construction, remodeling, roofing, masonry, additions,
              renovations, and general contracting services throughout
              Northern and Central New Jersey.
            </p>

            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-orange-500 px-6 py-3 font-semibold text-white">

              <ShieldCheck size={20} />

              Licensed & Fully Insured

            </div>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="text-2xl font-bold">
              Navigation
            </h3>

            <ul className="mt-8 space-y-5 text-slate-400">

              {[
                ["Home", "#home"],
                ["Services", "#services"],
                ["About", "#about"],
                ["Why Choose Us", "#why-choose-us"],
                ["Projects", "#projects"],
                ["Testimonials", "#testimonials"],
                ["Estimate", "#estimate"],
                ["Contact", "#contact"],
              ].map(([label, link]) => (

                <li key={label}>

                  <a
                    href={link}
                    className="transition hover:text-orange-500"
                  >
                    {label}
                  </a>

                </li>

              ))}

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="mt-8 space-y-7">

              <div className="flex gap-4">

                <Phone
                  size={22}
                  className="mt-1 text-orange-500"
                />

                <div>

                  <p className="font-semibold">
                    Direct Contractor
                  </p>

                  <a
                    href="tel:2014583098"
                    className="text-slate-400 hover:text-orange-500"
                  >
                    (201) 458-3098
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Phone
                  size={22}
                  className="mt-1 text-orange-500"
                />

                <div>

                  <p className="font-semibold">
                    Reception
                  </p>

                  <a
                    href="tel:2012646985"
                    className="text-slate-400 hover:text-orange-500"
                  >
                    (201) 264-6985
                  </a>

                </div>

              </div>

              <div className="flex gap-4">

                <Mail
                  size={22}
                  className="mt-1 text-orange-500"
                />

                <a
                  href="mailto:aleksconstructionllc@gmail.com"
                  className="break-all text-slate-400 hover:text-orange-500"
                >
                  aleksconstructionllc@gmail.com
                </a>

              </div>

            </div>

          </div>

          {/* Service Areas */}

          <div>

            <h3 className="text-2xl font-bold">
              Areas We Serve
            </h3>

            <div className="mt-8 space-y-4">

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
                  className="flex items-center gap-3 text-slate-400"
                >

                  <MapPin
                    size={18}
                    className="text-orange-500"
                  />

                  {county}

                </div>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-20 border-t border-slate-800 pt-10">

          <div className="flex flex-col items-center justify-between gap-6 text-center md:flex-row">

            <p className="text-slate-500">
              © 2026 Aleks Construction LLC. All Rights Reserved.
            </p>

            <a
              href="#home"
              className="inline-flex items-center gap-2 rounded-full border border-orange-500 px-6 py-3 font-semibold text-orange-500 transition duration-300 hover:bg-orange-500 hover:text-white"
            >
              Back to Top

              <ArrowUpRight
                size={18}
                strokeWidth={2.5}
              />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}
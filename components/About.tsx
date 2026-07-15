import Image from "next/image";
import {
  BadgeCheck,
  ShieldCheck,
  HardHat,
  Hammer,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-32 text-white"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2">

        {/* Left Side */}

        <div>

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            ABOUT ALEKS CONSTRUCTION
          </p>

          <h2 className="mt-6 text-5xl font-black leading-tight md:text-6xl">
            Building Quality Homes.
            <br />
            Creating Lasting Relationships.
          </h2>

          <div className="mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mt-10 text-lg leading-9 text-slate-300">
            Aleks Construction LLC is committed to delivering exceptional
            residential remodeling, renovations, additions, roofing, masonry,
            framing, flooring, and new construction services throughout New
            Jersey.
          </p>

          <p className="mt-6 text-lg leading-9 text-slate-300">
            Every project is completed with honesty, precision, quality
            craftsmanship, and attention to detail. Our mission is to build
            spaces that families enjoy for generations while making the entire
            construction process simple and stress-free.
          </p>

          {/* Features */}

          <div className="mt-12 grid gap-6">

            <div className="flex items-center gap-5">

              <div className="rounded-xl bg-orange-500 p-3">
                <BadgeCheck size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Licensed & Insured
                </h3>

                <p className="text-slate-400">
                  Professional workmanship with complete peace of mind.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="rounded-xl bg-orange-500 p-3">
                <ShieldCheck size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Honest & Transparent
                </h3>

                <p className="text-slate-400">
                  Clear communication, detailed estimates, and no hidden surprises.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="rounded-xl bg-orange-500 p-3">
                <HardHat size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Experienced Professionals
                </h3>

                <p className="text-slate-400">
                  Skilled craftsmanship backed by years of construction experience.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-5">

              <div className="rounded-xl bg-orange-500 p-3">
                <Hammer size={28} />
              </div>

              <div>

                <h3 className="text-xl font-bold">
                  Quality Guaranteed
                </h3>

                <p className="text-slate-400">
                  We stand behind every project from the first consultation to final walkthrough.
                </p>

              </div>

            </div>

          </div>

          {/* Statistics */}

          <div className="mt-16 grid grid-cols-2 gap-8">

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center">

              <h3 className="text-5xl font-black text-orange-500">
                100+
              </h3>

              <p className="mt-3 text-slate-300">
                Projects Completed
              </p>

            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-800 p-8 text-center">

              <h3 className="text-5xl font-black text-orange-500">
                20+
              </h3>

              <p className="mt-3 text-slate-300">
                Years of Experience
              </p>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/projects/project1.jpg"
              alt="Aleks Construction"
              width={700}
              height={900}
              className="object-cover transition duration-700 hover:scale-105"
            />

          </div>

          {/* Floating Card */}

          <div className="absolute -bottom-8 -left-8 rounded-3xl bg-white p-8 shadow-2xl">

            <h3 className="text-5xl font-black text-orange-500">
              100%
            </h3>

            <p className="mt-2 text-lg font-semibold text-slate-900">
              Client Satisfaction
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
import {
  ShieldCheck,
  Award,
  Clock3,
  MessageSquare,
  BadgeDollarSign,
  ThumbsUp,
  ArrowRight,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Licensed & Fully Insured",
    description:
      "Every project is completed according to industry standards with safety, professionalism, and compliance as our highest priorities.",
  },
  {
    icon: Award,
    title: "Superior Craftsmanship",
    description:
      "From framing to the final finish, we take pride in delivering exceptional workmanship that stands the test of time.",
  },
  {
    icon: Clock3,
    title: "Reliable Project Timelines",
    description:
      "Careful planning and efficient scheduling help keep your project moving forward without unnecessary delays.",
  },
  {
    icon: MessageSquare,
    title: "Transparent Communication",
    description:
      "You'll receive consistent updates and clear communication throughout every stage of your construction project.",
  },
  {
    icon: BadgeDollarSign,
    title: "Honest & Competitive Pricing",
    description:
      "Detailed estimates with transparent pricing so you know exactly what to expect before work begins.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    description:
      "Our reputation is built on trust, referrals, repeat clients, and consistently exceeding homeowner expectations.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-choose-us"
      className="bg-slate-50 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            WHY HOMEOWNERS CHOOSE US
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl">
            Experience.
            <br />
            Integrity.
            <br />
            Quality.
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Every project is completed with the same commitment to quality,
            communication, and craftsmanship that has earned the trust of
            homeowners throughout Northern and Central New Jersey.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="group rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-orange-500 hover:shadow-2xl"
              >

                <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-100 transition duration-300 group-hover:bg-orange-500">

                  <Icon
                    size={38}
                    strokeWidth={2}
                    className="text-orange-500 transition duration-300 group-hover:text-white"
                  />

                </div>

                <h3 className="mb-5 text-3xl font-bold text-slate-900 transition group-hover:text-orange-500">
                  {reason.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {reason.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl bg-slate-900 px-12 py-16 text-center text-white">

          <h3 className="text-4xl font-black">
            Ready to Start Your Next Project?
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Whether you're planning a complete renovation, a kitchen remodel,
            a home addition, or a new construction project, Aleks Construction
            is ready to bring your vision to life.
          </p>

          <a
            href="#estimate"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-orange-500 px-8 py-4 text-lg font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            Request Your Free Estimate

            <ArrowRight
              size={20}
              strokeWidth={2.5}
            />

          </a>

        </div>

      </div>
    </section>
  );
}
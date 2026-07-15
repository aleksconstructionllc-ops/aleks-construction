import { Star, Quote, ArrowRight } from "lucide-react";

const reviews = [
  {
    name: "Michael R.",
    project: "Kitchen Remodeling",
    location: "Bergen County, NJ",
    review:
      "Aleks Construction exceeded every expectation. The workmanship was exceptional, communication was excellent, and the project was completed on schedule. We couldn't be happier with the finished result.",
  },
  {
    name: "Sarah L.",
    project: "Home Addition",
    location: "Bergen County, NJ",
    review:
      "From the first consultation through the final walkthrough, the team was professional, honest, and responsive. They transformed our vision into reality with outstanding craftsmanship.",
  },
  {
    name: "David P.",
    project: "Bathroom Renovation",
    location: "Bergen County, NJ",
    review:
      "Attention to detail was outstanding. The crew respected our home, maintained a clean workspace, and delivered a beautiful bathroom renovation beyond our expectations.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-slate-900 py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            CLIENT TESTIMONIALS
          </p>

          <h2 className="mt-5 text-5xl font-black text-white md:text-6xl">
            Trusted By
            <br />
            New Jersey Homeowners
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            Our greatest accomplishment is earning the trust of homeowners by
            consistently delivering exceptional workmanship, honest service,
            and lasting quality.
          </p>

        </div>

        {/* Reviews */}

        <div className="grid gap-10 lg:grid-cols-3">

          {reviews.map((review) => (

            <div
              key={review.name}
              className="group rounded-3xl bg-slate-800 p-10 transition-all duration-500 hover:-translate-y-3 hover:bg-slate-700 hover:shadow-2xl"
            >

              <Quote
                size={40}
                className="mb-6 text-orange-500"
              />

              <div className="mb-6 flex gap-1">

                {[1,2,3,4,5].map((star) => (
                  <Star
                    key={star}
                    size={20}
                    fill="#f97316"
                    className="text-orange-500"
                  />
                ))}

              </div>

              <p className="leading-8 text-slate-300">
                "{review.review}"
              </p>

              <div className="mt-10 border-t border-slate-700 pt-6">

                <h3 className="text-xl font-bold text-white">
                  {review.name}
                </h3>

                <p className="mt-1 text-orange-400">
                  {review.project}
                </p>

                <p className="mt-2 text-sm text-slate-400">
                  {review.location}
                </p>

              </div>

            </div>

          ))}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-3xl bg-orange-500 px-12 py-16 text-center">

          <h3 className="text-4xl font-black text-white">
            Let's Build Something Exceptional Together
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
            Whether you're planning a renovation, home addition, kitchen,
            bathroom, roofing project, or a completely new build, Aleks
            Construction is ready to bring your vision to life.
          </p>

          <a
            href="#estimate"
            className="mt-10 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 transition duration-300 hover:-translate-y-1 hover:bg-slate-100"
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
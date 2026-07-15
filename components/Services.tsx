import {
  CookingPot,
  Bath,
  HousePlus,
  Home,
  Building2,
  Hammer,
  PanelsTopLeft,
  Paintbrush,
  Wrench,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Kitchen Remodeling",
      description:
        "Custom kitchens designed with premium cabinetry, countertops, lighting, flooring, and modern finishes built around your lifestyle.",
      icon: CookingPot,
    },
    {
      title: "Bathroom Remodeling",
      description:
        "Luxury bathroom renovations featuring custom tile work, walk-in showers, vanities, and elegant fixtures.",
      icon: Bath,
    },
    {
      title: "Home Additions",
      description:
        "Expand your home with seamless additions that blend perfectly with your existing architecture.",
      icon: HousePlus,
    },
    {
      title: "Roofing",
      description:
        "Complete roof replacements, repairs, and installations using premium materials built to last.",
      icon: Home,
    },
    {
      title: "Masonry",
      description:
        "Professional brick, stone, block, patios, retaining walls, walkways, and decorative masonry construction.",
      icon: Building2,
    },
    {
      title: "Framing",
      description:
        "Precision structural framing for renovations, additions, and new residential construction projects.",
      icon: Hammer,
    },
    {
      title: "Flooring",
      description:
        "Expert installation of hardwood, luxury vinyl, tile, laminate, and engineered flooring.",
      icon: PanelsTopLeft,
    },
    {
      title: "Interior & Exterior Painting",
      description:
        "Professional painting services delivering beautiful finishes with premium products and expert preparation.",
      icon: Paintbrush,
    },
    {
      title: "Complete Home Renovations",
      description:
        "From demolition to final walkthrough, we manage every phase of your renovation from start to finish.",
      icon: Wrench,
    },
  ];

  return (
    <section
      id="services"
      className="bg-gradient-to-b from-white to-slate-100 py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            OUR SERVICES
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl">
            Quality Construction.
            <br />
            Exceptional Craftsmanship.
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Aleks Construction LLC proudly provides high-quality residential
            construction, remodeling, renovations, roofing, masonry, framing,
            flooring, and general contracting services throughout Northern and
            Central New Jersey.
          </p>

        </div>

        {/* Service Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
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
                  {service.title}
                </h3>

                <p className="leading-8 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#estimate"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-orange-500 transition duration-300 group-hover:translate-x-2"
                >
                  Request Free Estimate

                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                  />

                </a>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";

const projects = [
  {
    title: "Modern Custom Home",
    category: "New Construction",
    location: "Bergen County, NJ",
    image: "/images/projects/project1.jpg",
  },
  {
    title: "Luxury Bathroom Remodel",
    category: "Bathroom Remodeling",
    location: "Bergen County, NJ",
    image: "/images/projects/project2.jpg",
  },
  {
    title: "Luxury Kitchen Remodel",
    category: "Kitchen Remodeling",
    location: "Bergen County, NJ",
    image: "/images/projects/project3.jpg",
  },
  {
    title: "Complete Interior Renovation",
    category: "Residential Remodeling",
    location: "Bergen County, NJ",
    image: "/images/projects/project4.jpg",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            OUR PORTFOLIO
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl">
            Featured Projects
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Every project reflects our commitment to craftsmanship,
            professionalism, and attention to detail. Take a look at a few
            recent projects completed throughout Northern and Central New
            Jersey.
          </p>

        </div>

        {/* Projects */}

        <div className="grid gap-10 lg:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
            >

              {/* Image */}

              <div className="relative h-[420px] overflow-hidden">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>

                <div className="absolute bottom-8 left-8">

                  <span className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold uppercase tracking-wider text-white">
                    {project.category}
                  </span>

                </div>

              </div>

              {/* Content */}

              <div className="p-10">

                <h3 className="text-3xl font-bold text-slate-900">
                  {project.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-slate-500">

                  <MapPin
                    size={18}
                    className="text-orange-500"
                  />

                  <span>{project.location}</span>

                </div>

                <p className="mt-6 leading-8 text-slate-600">
                  Built with premium craftsmanship, quality materials, and
                  careful attention to every detail from planning through
                  project completion.
                </p>

                <a
                  href="#estimate"
                  className="mt-8 inline-flex items-center gap-3 font-semibold text-orange-500 transition duration-300 group-hover:translate-x-2"
                >
                  View Gallery

                  <ArrowRight
                    size={18}
                    strokeWidth={2.5}
                  />

                </a>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
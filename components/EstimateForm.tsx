import {
  ClipboardList,
  Send,
  Upload,
} from "lucide-react";

export default function EstimateForm() {
  const inputStyle =
    "w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-500 transition duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500";

  return (
    <section
      id="estimate"
      className="bg-slate-100 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

        {/* Heading */}

        <div className="mb-20 text-center">

          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500">

            <ClipboardList
              size={42}
              className="text-white"
            />

          </div>

          <p className="text-sm font-bold uppercase tracking-[0.45em] text-orange-500">
            FREE ESTIMATE
          </p>

          <h2 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl">
            Tell Us About
            <br />
            Your Project
          </h2>

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500"></div>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Complete the form below and one of our construction specialists
            will contact you to discuss your project and schedule your
            complimentary estimate.
          </p>

        </div>

        {/* Form */}

        <div className="rounded-3xl bg-white p-10 shadow-2xl">

          <form className="grid gap-7 md:grid-cols-2">

            <input
              type="text"
              placeholder="Full Name"
              className={inputStyle}
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className={inputStyle}
            />

            <input
              type="email"
              placeholder="Email Address"
              className={`${inputStyle} md:col-span-2`}
            />

            <input
              type="text"
              placeholder="Street Address"
              className={`${inputStyle} md:col-span-2`}
            />

            <input
              type="text"
              placeholder="Apartment / Suite (Optional)"
              className={`${inputStyle} md:col-span-2`}
            />

            <input
              type="text"
              placeholder="City"
              className={inputStyle}
            />

            <select
              className={inputStyle}
              defaultValue="NJ"
            >
              <option value="NJ">New Jersey</option>
            </select>

            <input
              type="text"
              placeholder="ZIP Code"
              className={`${inputStyle} md:col-span-2`}
            />

            <select
              className={`${inputStyle} md:col-span-2`}
              defaultValue=""
            >
              <option value="" disabled>
                Select Service
              </option>

              <option>Kitchen Remodeling</option>
              <option>Bathroom Remodeling</option>
              <option>Home Additions</option>
              <option>New Construction</option>
              <option>Roofing</option>
              <option>Masonry</option>
              <option>Framing</option>
              <option>Painting</option>
              <option>Flooring</option>
              <option>Basement Finishing</option>
              <option>Deck & Patio Construction</option>
              <option>Siding</option>
              <option>Windows & Doors</option>
              <option>General Remodeling</option>
              <option>Other</option>

            </select>

            <select
              className={`${inputStyle} md:col-span-2`}
              defaultValue=""
            >
              <option value="" disabled>
                Estimated Project Budget
              </option>

              <option>Under $15,000</option>
              <option>$15,000 – $30,000</option>
              <option>$30,000 – $50,000</option>
              <option>$50,000 – $75,000</option>
              <option>$75,000 – $100,000</option>
              <option>$100,000 – $250,000</option>
              <option>$250,000+</option>
              <option>Not Sure Yet</option>

            </select>

            <select
              className={`${inputStyle} md:col-span-2`}
              defaultValue=""
            >
              <option value="" disabled>
                Desired Timeline
              </option>

              <option>Immediately</option>
              <option>Within 30 Days</option>
              <option>1–3 Months</option>
              <option>3–6 Months</option>
              <option>6+ Months</option>
              <option>Just Gathering Information</option>

            </select>

            <textarea
              rows={7}
              placeholder="Describe your project in as much detail as possible..."
              className={`${inputStyle} md:col-span-2`}
            />

            <div className="md:col-span-2">

              <label className="mb-3 flex items-center gap-3 text-lg font-semibold text-slate-900">

                <Upload
                  size={22}
                  className="text-orange-500"
                />

                Upload Project Photos (Optional)

              </label>

              <input
                type="file"
                multiple
                className="w-full rounded-2xl border border-slate-300 p-4 file:mr-5 file:rounded-xl file:border-0 file:bg-orange-500 file:px-6 file:py-3 file:font-semibold file:text-white hover:file:bg-orange-600"
              />

            </div>

            <button
              type="submit"
              className="md:col-span-2 mt-4 flex items-center justify-center gap-3 rounded-2xl bg-orange-500 py-5 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >

              <Send size={22} />

              Request My FREE Estimate

            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
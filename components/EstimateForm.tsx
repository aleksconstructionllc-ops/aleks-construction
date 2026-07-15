"use client";

import { useState } from "react";
import { ClipboardList, Send } from "lucide-react";

export default function EstimateForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    address2: "",
    city: "",
    state: "NJ",
    zip: "",
    service: "",
    budget: "",
    timeline: "",
    description: "",
  });

  const inputStyle =
    "w-full rounded-2xl border border-slate-300 bg-white p-4 text-slate-900 placeholder:text-slate-500 transition duration-300 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500";

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/estimate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Unable to send estimate request.");
      }

      setSuccess(
        "Thank you! Your estimate request has been sent successfully."
      );

      setForm({
        name: "",
        phone: "",
        email: "",
        address: "",
        address2: "",
        city: "",
        state: "NJ",
        zip: "",
        service: "",
        budget: "",
        timeline: "",
        description: "",
      });
    } catch {
      setError(
        "Something went wrong while sending your request. Please try again."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="estimate"
      className="bg-slate-100 py-32"
    >
      <div className="mx-auto max-w-6xl px-6">

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

          <div className="mx-auto mt-8 h-1 w-24 rounded-full bg-orange-500" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Complete the form below and one of our construction specialists
            will contact you to discuss your project and schedule your
            complimentary estimate.
          </p>

        </div>

        <div className="rounded-3xl bg-white p-10 shadow-2xl">

          <form
            onSubmit={handleSubmit}
            className="grid gap-7 md:grid-cols-2"
          >

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              type="text"
              placeholder="Full Name"
              className={inputStyle}
            />

            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              type="tel"
              placeholder="Phone Number"
              className={inputStyle}
            />

            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              type="email"
              placeholder="Email Address"
              className={`${inputStyle} md:col-span-2`}
            />

            <input
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              type="text"
              placeholder="Street Address"
              className={`${inputStyle} md:col-span-2`}
            />

            <input
              name="address2"
              value={form.address2}
              onChange={handleChange}
              type="text"
              placeholder="Apartment / Suite (Optional)"
              className={`${inputStyle} md:col-span-2`}
            />            <input
              name="city"
              value={form.city}
              onChange={handleChange}
              required
              type="text"
              placeholder="City"
              className={inputStyle}
            />

            <select
              name="state"
              value={form.state}
              onChange={handleChange}
              required
              className={inputStyle}
            >
              <option value="NJ">New Jersey</option>
            </select>

            <input
              name="zip"
              value={form.zip}
              onChange={handleChange}
              required
              type="text"
              inputMode="numeric"
              placeholder="ZIP Code"
              className={`${inputStyle} md:col-span-2`}
            />

            <select
              name="service"
              value={form.service}
              onChange={handleChange}
              required
              className={`${inputStyle} md:col-span-2`}
            >
              <option value="" disabled>
                Select Service
              </option>

              <option value="Kitchen Remodeling">
                Kitchen Remodeling
              </option>

              <option value="Bathroom Remodeling">
                Bathroom Remodeling
              </option>

              <option value="Home Additions">
                Home Additions
              </option>

              <option value="New Construction">
                New Construction
              </option>

              <option value="Roofing">
                Roofing
              </option>

              <option value="Masonry">
                Masonry
              </option>

              <option value="Framing">
                Framing
              </option>

              <option value="Painting">
                Painting
              </option>

              <option value="Flooring">
                Flooring
              </option>

              <option value="Basement Finishing">
                Basement Finishing
              </option>

              <option value="Deck & Patio Construction">
                Deck & Patio Construction
              </option>

              <option value="Siding">
                Siding
              </option>

              <option value="Windows & Doors">
                Windows & Doors
              </option>

              <option value="General Remodeling">
                General Remodeling
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            <select
              name="budget"
              value={form.budget}
              onChange={handleChange}
              required
              className={`${inputStyle} md:col-span-2`}
            >
              <option value="" disabled>
                Estimated Project Budget
              </option>

              <option value="Under $15,000">
                Under $15,000
              </option>

              <option value="$15,000 – $30,000">
                $15,000 – $30,000
              </option>

              <option value="$30,000 – $50,000">
                $30,000 – $50,000
              </option>

              <option value="$50,000 – $75,000">
                $50,000 – $75,000
              </option>

              <option value="$75,000 – $100,000">
                $75,000 – $100,000
              </option>

              <option value="$100,000 – $250,000">
                $100,000 – $250,000
              </option>

              <option value="$250,000+">
                $250,000+
              </option>

              <option value="Not Sure Yet">
                Not Sure Yet
              </option>
            </select>

            <select
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              required
              className={`${inputStyle} md:col-span-2`}
            >
              <option value="" disabled>
                Desired Timeline
              </option>

              <option value="Immediately">
                Immediately
              </option>

              <option value="Within 30 Days">
                Within 30 Days
              </option>

              <option value="1–3 Months">
                1–3 Months
              </option>

              <option value="3–6 Months">
                3–6 Months
              </option>

              <option value="6+ Months">
                6+ Months
              </option>

              <option value="Just Gathering Information">
                Just Gathering Information
              </option>
            </select>

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              rows={7}
              placeholder="Describe your project in as much detail as possible..."
              className={`${inputStyle} resize-y md:col-span-2`}
            />

            {success && (
              <div
                role="status"
                className="rounded-2xl border border-green-300 bg-green-50 p-5 text-center font-semibold text-green-700 md:col-span-2"
              >
                {success}
              </div>
            )}

            {error && (
              <div
                role="alert"
                className="rounded-2xl border border-red-300 bg-red-50 p-5 text-center font-semibold text-red-700 md:col-span-2"
              >
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="mt-4 flex items-center justify-center gap-3 rounded-2xl bg-orange-500 py-5 text-xl font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2"
            >
              <Send size={22} />

              {loading
                ? "Sending Request..."
                : "Request My FREE Estimate"}
            </button>

          </form>

        </div>

      </div>
    </section>
  );
}
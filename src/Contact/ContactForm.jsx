
import { useState } from "react";
import { Mail, MessageCircle, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (loading) return;

    setLoading(true);

    try {
      const result = await emailjs.send(
        "service_yx5kvr4",
        "template_z3th0n8",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: "zaarkhan483@gmail.com",
        },
        "o51quF5mpQW-ucABt"
      );

      console.log("EmailJS Success:", result.text);

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      alert(
        `Message could not be sent.\n\nStatus: ${
          error?.status || "Unknown"
        }\nText: ${error?.text || "Please try again later."}`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      aria-labelledby="contact-form-title"
      className="bg-gray-200"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 md:grid-cols-2">
        {/* LEFT SIDE */}
        <div>
          <p className="text-center text-sm font-bold uppercase tracking-[0.2em] text-yellow-600 md:text-left">
            Pak Aviator Contact
          </p>

          <h2
            id="contact-form-title"
            className="mt-3 text-center text-3xl font-black text-slate-900 sm:text-4xl md:text-left"
          >
            Contact Pak Aviator
          </h2>

          <p className="mt-5 text-center leading-8 text-slate-600 md:text-left">
            Have a question, suggestion, or feedback about Pak Aviator?
            Send us a message using the contact form and provide the
            details needed to understand your request.
          </p>

          {/* CONTACT INFORMATION */}
          <div className="mt-8 space-y-4">
            {/* EMAIL */}
            <a
              href="mailto:contact@pakaviators.com"
              aria-label="Email Pak Aviator Support"
              className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4 transition hover:border-yellow-400 hover:shadow-sm"
            >
              <Mail
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-slate-700">
                contact@pakaviators.com
              </span>
            </a>

            {/* SUPPORT */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <Phone
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-slate-700">
                Contact Support
              </span>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div className="flex items-center gap-4 rounded-xl border border-gray-300 bg-white p-4">
              <MessageCircle
                aria-hidden="true"
                className="shrink-0 text-yellow-500"
              />

              <span className="text-slate-700">
                Customer Support
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <form
          onSubmit={handleSubmit}
          aria-label="Pak Aviator contact form"
          className="rounded-2xl border border-gray-300 bg-white p-6 shadow-sm sm:p-8"
        >
          {/* NAME */}
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Name
            </label>

            <input
              id="contact-name"
              required
              autoComplete="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* EMAIL */}
          <div className="mt-5">
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Email
            </label>

            <input
              id="contact-email"
              required
              autoComplete="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* PHONE */}
          <div className="mt-5">
            <label
              htmlFor="contact-phone"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Phone Number
            </label>

            <input
              id="contact-phone"
              required
              autoComplete="tel"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* MESSAGE */}
          <div className="mt-5">
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              Message
            </label>

            <textarea
              id="contact-message"
              required
              rows={5}
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              className="w-full resize-none rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-slate-900 outline-none placeholder:text-gray-400 focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className={`mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-3.5 font-bold text-slate-950 transition ${
              loading
                ? "cursor-not-allowed bg-gray-400"
                : "bg-yellow-400 hover:bg-yellow-300"
            }`}
          >
            <span>
              {loading ? "Sending..." : "Send Message"}
            </span>

            <Send
              size={18}
              aria-hidden="true"
            />
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;


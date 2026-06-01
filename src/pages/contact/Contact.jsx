import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import NavBar from "../../components/navigation/NavBar";

function Contact() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  const [formData, setFormData] = useState({
    user_name: "",
    user_address: "",
    user_email: "",
    service_type: "",
    message: "",
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);
    setStatusMessage({ type: "", text: "" });

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      })
      .then(
        () => {
          setLoading(false);
          setStatusMessage({
            type: "success",
            text: "Thank you! Your message has been sent successfully. We will get back to you shortly.",
          });
          setFormData({
            user_name: "",
            user_address: "",
            user_email: "",
            service_type: "",
            message: "",
          });
        },
        error => {
          setLoading(false);
          setStatusMessage({
            type: "error",
            text: "Oops! Something went wrong. Please try calling us directly.",
          });
          console.error("EmailJS Error:", error.text);
        },
      );
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-gray-100">
      <NavBar />

      <main className="max-w-3xl mx-auto px-4 py-12 sm:px-6 lg:py-16">
        {/* Header section */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl uppercase">
            Request a Quote
          </h1>
          <p className="mt-4 text-lg text-zinc-400">
            Fill out the form below and our team will get back to you as soon as
            possible.
          </p>
        </div>

        {/* Status Alerts */}
        {statusMessage.text && (
          <div
            className={`mb-6 p-4 rounded-md text-sm font-bold tracking-wide transition-all ${
              statusMessage.type === "success"
                ? "bg-green-950/80 text-green-400 border border-green-800"
                : "bg-red-950/80 text-red-400 border border-red-800"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        {/* Form Card */}
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="bg-zinc-900 p-6 sm:p-10 rounded-xl shadow-2xl border border-zinc-800 space-y-6"
        >
          {/* Row 1: Name & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="user_name"
                className="text-sm font-bold tracking-wide uppercase text-zinc-300"
              >
                Full Name *
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                value={formData.user_name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md shadow-inner text-base text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition placeholder-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="user_email"
                className="text-sm font-bold tracking-wide uppercase text-zinc-300"
              >
                Email Address *
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                value={formData.user_email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md shadow-inner text-base text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition placeholder-zinc-600"
              />
            </div>
          </div>

          {/* Row 2: Address & Service Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="user_address"
                className="text-sm font-bold tracking-wide uppercase text-zinc-300"
              >
                Project Address *
              </label>
              <input
                type="text"
                id="user_address"
                name="user_address"
                required
                value={formData.user_address}
                onChange={handleChange}
                placeholder="123 Main St, City, State"
                className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md shadow-inner text-base text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition placeholder-zinc-600"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label
                htmlFor="service_type"
                className="text-sm font-bold tracking-wide uppercase text-zinc-300"
              >
                Service Needed *
              </label>
              {/* Dropdown wrapper for custom arrow positioning */}
              <div className="relative">
                <select
                  id="service_type"
                  name="service_type"
                  required
                  value={formData.service_type}
                  onChange={handleChange}
                  className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md shadow-inner text-base text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition appearance-none pr-10"
                >
                  <option
                    value=""
                    disabled
                    className="text-zinc-400 bg-zinc-900"
                  >
                    Select a service...
                  </option>
                  <option value="Siding" className="text-white bg-zinc-900">
                    Siding
                  </option>
                  <option value="Roofing" className="text-white bg-zinc-900">
                    Roofing
                  </option>
                  <option value="Gutter" className="text-white bg-zinc-900">
                    Gutter
                  </option>
                  <option value="Other" className="text-white bg-zinc-900">
                    Other / Not Listed
                  </option>
                </select>

                {/* Custom SVG arrow element */}
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400">
                  <svg
                    className="fill-current h-4 w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Row 3: Message Content */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold tracking-wide uppercase text-zinc-300"
            >
              Project Details / Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              placeholder="Please describe what you need help with..."
              className="w-full p-3 bg-zinc-950 border border-zinc-700 rounded-md shadow-inner text-base text-white focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none transition resize-y placeholder-zinc-600"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 px-6 bg-red-600 hover:bg-yellow-400 text-white hover:text-red-700 font-black rounded-md shadow-md text-base uppercase tracking-wider transition-colors duration-200 disabled:bg-zinc-700 disabled:text-zinc-500 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-red-600"
            >
              {loading ? "Sending..." : "Submit Request"}
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;

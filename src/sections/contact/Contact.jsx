import { FiPhone, FiMail } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./contact.css";

const MAX_MESSAGE_SIZE = 50000; // approx 50KB text limit

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const messageSize = new Blob([data.message]).size;

    if (messageSize > MAX_MESSAGE_SIZE) {
      toast.error("Message too large. Limit under 50KB.");
      return;
    }

    setLoading(true);

    emailjs
      .send(
        "service_dd1w1up",
        "template_zojdev6",
        {
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
        },
        "S1sLDURh_NwUlm67S"
      )
      .then(() => {
        toast.success("Message sent successfully.");
        reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Try later.");
        setLoading(false);
      });
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card - Contact Form */}
        <div className="p-8 rounded-lg shadow-lg space-y-6 bg-purple-950/20 text-white border border-gray-700">
          <h2 className="text-4xl  bg-linear-to-r from-purple-600 to-white bg-clip-text text-transparent font-extrabold">
            Let's Work Together
          </h2>
          <p className="text-gray-400 text-center">
            For work inquiries, select your required service and message me.
          </p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border rounded border-gray-600 bg-black text-white placeholder-gray-400"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border rounded border-gray-600 bg-black text-white placeholder-gray-400"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>

            <div>
              <select
                className="w-full p-3 border rounded border-gray-600 bg-black text-white"
                {...register("service", { required: "Select a service" })}
              >
                <option value="" className="text-gray-400">
                  Select Service
                </option>
                <option value="Full stack development">
                  Full stack development
                </option>
                <option value="Frontend development">
                  Frontend development
                </option>
                <option value="Backend development">Backend development</option>
                <option value="App development">App development</option>
                <option value="AI integration">AI integration</option>
                <option value="Web development">Web development</option>
              </select>
              {errors.service && (
                <p className="text-red-500 text-sm">{errors.service.message}</p>
              )}
            </div>

            <div>
              <textarea
                placeholder="Message (limit under 50KB)"
                rows="6"
                className="w-full p-3 border rounded border-gray-600 bg-black text-white placeholder-gray-400"
                {...register("message", {
                  required: "Message is required",
                  minLength: 10,
                  maxLength: 50000,
                })}
              />
              {errors.message && (
                <p className="text-red-500 text-sm">
                  Message required (10 chars minimum)
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md uppercase font-semibold transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
          <Toaster position="top-center" />
        </div>

        {/* Right Card - Contact Info */}

        <div className="p-8 rounded-lg space-y-6 bg-gray-950  text-white shadow-[0_0_70px_rgba(128,0,255,0.2)] hidden lg:flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-center">Get in Touch</h2>
          <p className="text-center text-white/80">
            Reach out directly via phone or email.
          </p>

          <div className="mt-6 space-y-4 text-center flex flex-col items-center gap-4">
            <div className="flex items-center gap-2">
              <FiPhone className="text-purple-400" size={24} />
              <a
                href="tel:+9203004196455"
                className="underline text-white hover:text-purple-400"
              >
                +92 0300-4196455
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FiMail className="text-purple-400" size={24} />
              <a
                href="mailto:saadbkhalid666@gmail.com"
                className="underline text-white hover:text-purple-400"
              >
                saadbkhalid666@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

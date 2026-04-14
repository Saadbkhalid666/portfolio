import { FiPhone, FiMail, FiSend } from "react-icons/fi";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { useState } from "react";

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
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
        },
        import.meta.env.VITE_PUBLIC_API_KEY
      )
      .then(() => {
        toast.success("Message sent successfully!");
        reset();
        setLoading(false);
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        toast.error("Failed to send message. Try later.");
        setLoading(false);
      });
  };

  const inputClass = "w-full p-4 bg-black/30 border border-purple-500/20 text-white rounded-xl placeholder-gray-500 focus:outline-none focus:border-purple-400 focus:ring-1 focus:ring-purple-400 transition-all duration-300";

  return (
    <section id="contact" className="relative w-full py-24 px-4 md:px-10 lg:px-20 text-white overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute left-[-10%] top-[20%] w-160 h-160 bg-purple-900/10 blur-[150px] rounded-full pointer-events-none -z-10"></div>
      <div className="absolute right-[-10%] bottom-[-10%] w-160 h-160 bg-purple-600/10 blur-[130px] rounded-full pointer-events-none -z-10"></div>

      <div className="text-center mb-16 md:mb-20 relative">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-purple-400 via-purple-300 to-white inline-block pb-2">
          Let's Work Together
        </h1>
        <div className="h-1 w-24 bg-linear-to-r from-purple-600 to-purple-300 mx-auto mt-6 rounded-full shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
        <p className="mt-6 text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
          Have a project in mind or looking for a collaboration? Fill out the form below or reach out directly to start a conversation!
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 relative z-10">
        
        {/* Left Card - Contact Info */}
        <div className="lg:col-span-2 flex flex-col gap-6 md:gap-8">
          <div className="bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300 flex items-start gap-6 group">
             <div className="p-4 bg-purple-900/40 text-purple-400 rounded-2xl border border-purple-500/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
               <FiPhone size={28} />
             </div>
             <div>
               <h3 className="text-lg font-semibold text-gray-300 mb-1">Call Me</h3>
               <a href="tel:+9203004196455" className="text-xl md:text-2xl font-bold text-white hover:text-purple-300 transition-colors">
                 +92 0300-4196455
               </a>
             </div>
          </div>

          <div className="bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300 flex items-start gap-6 group">
             <div className="p-4 bg-purple-900/40 text-purple-400 rounded-2xl border border-purple-500/30 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] transition-all duration-300">
               <FiMail size={28} />
             </div>
             <div className="break-all">
               <h3 className="text-lg font-semibold text-gray-300 mb-1">Email Me</h3>
               <a href="mailto:saadbkhalid666@gmail.com" className="text-lg md:text-xl font-bold text-white hover:text-purple-300 transition-colors">
                 saadbkhalid666@gmail.com
               </a>
             </div>
          </div>
          
          <div className="bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-3xl p-8 hover:-translate-y-1 hover:shadow-purple-500/10 transition-all duration-300">
             <h3 className="text-xl font-semibold text-purple-300 mb-4">Availability</h3>
             <p className="text-gray-400 leading-relaxed">
               I am actively seeking full-time roles and freelance opportunities. My timezone is PKT (Pakistan Standard Time), and I am open to flexible remote schedules.
             </p>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="lg:col-span-3 bg-[#120F1F]/60 backdrop-blur-xl border border-purple-500/20 shadow-lg shadow-purple-900/20 rounded-3xl p-8 md:p-10 relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Send a Message</h2>
          
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className={inputClass}
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <p className="mt-2 text-red-500 text-sm pl-2">{errors.name.message}</p>}
              </div>

              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className={inputClass}
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && <p className="mt-2 text-red-500 text-sm pl-2">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <select
                className={`${inputClass} appearance-none cursor-pointer`}
                {...register("service", { required: "Select a service" })}
              >
                <option value="" className="bg-[#0b0914] text-gray-400">
                  Select Service
                </option>
                <option value="Full stack development" className="bg-[#0b0914] text-white py-2">
                  Full stack development
                </option>
                <option value="Frontend development" className="bg-[#0b0914] text-white py-2">
                  Frontend development
                </option>
                <option value="Backend development" className="bg-[#0b0914] text-white py-2">Backend development</option>
                <option value="App development" className="bg-[#0b0914] text-white py-2">App development</option>
                <option value="AI integration" className="bg-[#0b0914] text-white py-2">AI integration</option>
                <option value="Web development" className="bg-[#0b0914] text-white py-2">Web development</option>
              </select>
              {errors.service && <p className="mt-2 text-red-500 text-sm pl-2">{errors.service.message}</p>}
            </div>

            <div>
              <textarea
                placeholder="Message (limit under 50KB)"
                rows="5"
                className={`${inputClass} resize-none`}
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 10, message: "10 characters minimum" },
                  maxLength: { value: 50000, message: "Message is too long" },
                })}
              />
              {errors.message && <p className="mt-2 text-red-500 text-sm pl-2">{errors.message.message}</p>}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white py-4 rounded-xl uppercase font-bold tracking-widest shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] transition-all duration-300 transform hover:-translate-y-1 mt-4 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
            >
              {loading ? "Sending..." : (
                <>
                  <FiSend size={18} /> Send Message
                </>
              )}
            </button>
          </form>
          <Toaster 
            position="top-center" 
            toastOptions={{
              style: {
                background: '#1a1625',
                color: '#fff',
                border: '1px solid rgba(168,85,247,0.3)',
              }
            }} 
          />
        </div>
        
      </div>
    </section>
  );
};

export default ContactForm;

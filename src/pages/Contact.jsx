import React, { useState } from "react";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateForm = () => {
    const { name, email, subject, message } = formData;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim().length < 2) {
      toast.error("Name must be at least 2 characters");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return false;
    }
    if (subject.trim().length === 0) {
      toast.error("Subject is required");
      return false;
    }
    if (message.trim().length < 10) {
      toast.error("Message must be at least 10 characters long");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const toastId = toast.loading("Sending message...");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        toast.success("Message sent successfully! ✅", { id: toastId });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        toast.error("Failed to send message. Please try again. ❌", {
          id: toastId,
        });
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-indigo-600 to-purple-600 p-4">
      <div className="w-full max-w-2xl bg-white/10 backdrop-blur-lg rounded-xl border border-white/20 p-8 text-white shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Us 📬</h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full px-4 py-2 rounded-md bg-white/20 placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          ></textarea>

          <button
            type="submit"
            className="w-full py-2 bg-white text-indigo-600 font-semibold rounded-md hover:bg-gray-100 transition-all"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;

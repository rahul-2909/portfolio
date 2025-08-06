
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_grdk7zr",     // your service ID
        "template_dh0cxyw",    // your template ID
        form.current,
        "bILhNx_KyAfvGg7qw"    // your public key
      )
      .then(
        () => {
          toast.success("Message sent successfully! 🎉");
          form.current.reset();
        },
        () => {
          toast.error("Something went wrong. Please try again 😥");
        }
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-4 py-20 flex items-center justify-center"
    >
      <div className="max-w-2xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Contact <span className="text-blue-400">Me</span>
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 text-left"
        >
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              rows="5"
              required
              className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactDetails = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gray-900 text-white px-4 py-20 flex items-center justify-center"
    >
      <div className="max-w-xl w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Get in <span className="text-blue-400">Touch</span>
        </h2>

        <div className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 text-left">
          <div className="flex items-center gap-4">
            <Mail className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Email</p>
              <p className="font-semibold">rohitrahul2909@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Phone className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Phone</p>
              <p className="font-semibold">+91 79849 52055 </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <MapPin className="text-blue-400" />
            <div>
              <p className="text-sm text-gray-400">Address</p>
              <p className="font-semibold">
                 Vadodara, Gujarat, India
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetails;

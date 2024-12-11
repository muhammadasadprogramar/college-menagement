import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className="py-8 px-4">
      <h1 className="mx-auto mt-4 sm:mt-8 text-gray-600 text-2xl sm:text-3xl md:text-4xl font-bold text-center">
        Get In Touch
      </h1>
      <hr className="mx-auto mt-4 sm:mt-8 h-1 w-[60%] sm:w-[40%] md:w-[20%] bg-[#009879]" />

      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009879]"
              />
            </div>
            <div>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009879]"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009879]"
              />
            </div>
            <div>
              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#009879]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#009879] hover:bg-[#008069] text-white font-medium py-2 rounded-md transition duration-300"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="w-full md:w-1/2 space-y-6">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-[#009879] text-2xl" />
              <div>
                <h3 className="font-semibold">Address</h3>
                <p className="text-gray-600">123 Main Street, City, Country</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaPhone className="text-[#009879] text-2xl" />
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-[#009879] text-2xl" />
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-gray-600">contact@example.com</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a className="text-[#009879] cursor-pointer hover:text-[#008069] text-2xl">
                <FaFacebook />
              </a>
              <a className="text-[#009879] cursor-pointer hover:text-[#008069] text-2xl">
                <FaTwitter />
              </a>
              <a className="text-[#009879] cursor-pointer hover:text-[#008069] text-2xl">
                <FaInstagram />
              </a>
              <a className="text-[#009879] cursor-pointer hover:text-[#008069] text-2xl">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

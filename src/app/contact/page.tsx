"use client";
import React, { useState } from "react";

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center lg:items-start text-center lg:text-left">
          <img
            src="contact.png"
            alt="Contact Us"
            className="w-20 sm:w-24 lg:w-32 mb-4"
          />
          <h2 className="text-lg font-bold text-gray-700 mb-4">Contact Us</h2>
          <div className="space-y-4">
            <div>
              <p className="font-semibold text-gray-700">Address</p>
              <p className="text-gray-600 text-sm">
                NY State Thruway, New York, USA
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Phone</p>
              <p className="text-gray-600 text-sm">+129290122122</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Email</p>
              <p className="text-gray-600 text-sm">demo@demo.com</p>
            </div>
            <div>
              <p className="font-semibold text-gray-700">Website</p>
              <a
                href="https://redq.io"
                className="text-blue-500 hover:underline text-sm"
              >
                Visit This Site
              </a>
            </div>
          </div>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition transform hover:scale-110"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-700 transition transform hover:scale-110"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition transform hover:scale-110"
            >
              <i className="fab fa-linkedin fa-lg"></i>
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 lg:p-10">
          <h2 className="text-xl font-bold text-gray-800 mb-6">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                required
                className="w-full mt-1 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition"
            >
              Submit
            </button>
          </form>
          {/* Success Message */}
          {formSubmitted && (
            <div className="mt-4 text-green-600 font-semibold">
              Thank you for your message! We’ll get back to you soon.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

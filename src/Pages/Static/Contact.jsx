import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import toast from "react-hot-toast";

const ContactUs = () => {
  const handleSendMessage = (e) => {
    e.preventDefault();
    e.target.reset();
    toast.success('Successfully Sent Message!', {
      position: "top-center",
    });
  };

  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12">
      <div className="max-w-7xl mx-auto lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">Contact Us</h1>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-lg">
            <FaPhone className="text-primary text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Phone</h2>
            <p className="text-center">+1 234 567 890</p>
          </div>
          <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-lg">
            <FaEnvelope className="text-primary text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Email</h2>
            <p className="text-center">support@runroute.com</p>
          </div>
          <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-lg">
            <FaMapMarkerAlt className="text-primary text-3xl mb-4" />
            <h2 className="text-xl font-semibold mb-2">Address</h2>
            <p className="text-center">123 Marathon St, Runner City</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-base-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-center mb-6">Send Us a Message</h2>
          <form className="space-y-6" onSubmit={handleSendMessage}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Name</span>
              </label>
              <input type="text" placeholder="Enter your name" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Email</span>
              </label>
              <input type="email" placeholder="Enter your email" className="input input-bordered w-full" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Message</span>
              </label>
              <textarea placeholder="Enter your message" className="textarea textarea-bordered w-full h-32" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;

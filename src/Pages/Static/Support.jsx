import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Support = () => {
    return (
        <div className="bg-base-100 py-12 md:px-6">
            <div className="max-w-4xl mx-auto bg-base-200 py-8 px-4 rounded-lg shadow-lg">
                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-base-content mb-6">Support</h1>
                <p className="text-lg text-gray-600 dark:text-gray-400 text-center mb-8">
                    We're here to help you with any questions or issues you might have. Contact us via the following channels:
                </p>

                {/* Contact Information */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md">
                        <FaPhoneAlt className="text-4xl text-blue-500 mb-4" />
                        <h3 className="text-xl font-semibold text-base-content">Call Us</h3>
                        <p className="text-base-content">+1 234 567 890</p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md">
                        <FaEnvelope className="text-4xl text-green-500 mb-4" />
                        <h3 className="text-xl font-semibold text-base-content">Email Us</h3>
                        <p className="text-base-content">support@runroute.com</p>
                    </div>

                    {/* Address */}
                    <div className="flex flex-col items-center bg-base-200 p-6 rounded-lg shadow-md sm:col-span-2">
                        <FaMapMarkerAlt className="text-4xl text-red-500 mb-4" />
                        <h3 className="text-xl font-semibold text-base-content">Visit Us</h3>
                        <p className="text-base-content">123 RunRoute St, Rajbari, Bangladesh</p>
                    </div>
                </div>

                {/* Sections */}
                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-4">Other Support Options</h2>

                    {/* FAQs */}
                    <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-base-content">FAQs</h3>
                        <p className="text-base-content">Visit our FAQ page to find quick answers to common questions.</p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Learn More</Link>
                    </div>

                    {/* Live Chat */}
                    <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-base-content">Live Chat</h3>
                        <p className="text-base-content">Chat with one of our support agents in real-time.</p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Start Chat</Link>
                    </div>

                    {/* Email Support */}
                    <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-base-content">Email Support</h3>
                        <p className="text-base-content">Need help? Email our support team and we'll get back to you within 24 hours.</p>
                        <Link to="mailto:support@fundfusions.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Email Us</Link>
                    </div>

                    {/* Community Forum */}
                    <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-base-content">Community Forum</h3>
                        <p className="text-base-content">Join our community forum to get help from other users and share experiences.</p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Visit Forum</Link>
                    </div>

                    {/* Others */}
                    <div className="bg-base-200 p-6 rounded-lg shadow-md mb-6">
                        <h3 className="text-xl font-semibold text-base-content">Other Options</h3>
                        <p className="text-base-content">Explore additional ways to contact support and get the help you need.</p>
                        <Link to="https://wa.me/8801957710483" target="_blank" rel="noopener noreferrer" className="text-indigo-600 font-medium mt-3 inline-block">Learn More</Link>
                    </div>
                </div>

                {/* Join or Get Support Directly */}
                <div className="mt-8 bg-base-200 p-6 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-semibold text-base-content mb-4">Need Direct Support?</h3>
                    <p className="text-base-content mb-6">
                        If you want to get support directly or join our support team, click below to get started!
                    </p>
                    <Link to="mailto:support@fundfusions.com"
                        className="btn btn-primary text-white py-2 px-4 rounded-lg shadow-md hover:bg-primary-focus"
                    >
                        Join Support
                    </Link>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-base-content">
                        Need further assistance? Don't hesitate to reach out to us. We're here to help!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Support;

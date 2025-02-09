import React from 'react';
import { FaHandshake, FaLightbulb, FaRocket, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-base-100 text-base-content py-12">
      <div className="max-w-7xl mx-auto lg:px-8">
        <h1 className="text-3xl font-bold text-center mb-8">About Us</h1>

        {/* Mission and Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-base-200 shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaLightbulb className="text-primary text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Our Mission</h2>
            </div>
            <p>
              Our mission is to create a platform that empowers runners and event organizers to seamlessly plan and manage marathons. We strive to bring the running community together and promote healthy lifestyles.
            </p>
          </div>
          <div className="bg-base-200 shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaRocket className="text-primary text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Our Vision</h2>
            </div>
            <p>
              We envision a world where every runner has the opportunity to participate in well-organized events, regardless of location or resources. Our goal is to be the leading platform for marathon management.
            </p>
          </div>
        </div>

        {/* What We Do and Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-base-200 shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaUsers className="text-primary text-2xl mr-3" />
              <h2 className="text-xl font-semibold">What We Do</h2>
            </div>
            <p>
              RunRoute connects runners and event organizers with tools to plan, manage, and track marathon events. From registration to post-event analytics, we simplify the entire process.
            </p>
          </div>
          <div className="bg-base-200 shadow-lg p-6 rounded-lg">
            <div className="flex items-center mb-4">
              <FaHandshake className="text-primary text-2xl mr-3" />
              <h2 className="text-xl font-semibold">Why Choose Us</h2>
            </div>
            <p>
              Our platform is designed with trust, transparency, and user experience in mind. We offer powerful tools and an intuitive interface, ensuring seamless collaboration and event management.
            </p>
          </div>
        </div>

        {/* Join Us Section */}
        <div className="text-center bg-base-200 py-8 px-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Join Us</h2>
          <p className="mb-6">
            Become a part of our growing community of runners and organizers. Whether you're hosting a marathon or participating in one, RunRoute is here to support your journey.
          </p>
          <Link to='/contactUs' className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

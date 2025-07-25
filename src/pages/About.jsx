import React from 'react';

// Sample data for team members
const teamMembers = [
  {
    name: 'Jane Doe',
    role: 'Co-Founder & CEO',
    image: 'https://via.placeholder.com/150/AEC6CF/FFFFFF?text=Jane', // Replace with actual image
    bio: 'With over 15 years in the travel industry, Jane leads with a passion for sustainable tourism and immersive cultural experiences.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'John Smith',
    role: 'Co-Founder & CTO',
    image: 'https://via.placeholder.com/150/D1C7DF/FFFFFF?text=John', // Replace with actual image
    bio: 'John’s expertise in technology ensures seamless booking experiences and innovative travel solutions for our clients.',
    social: {
      linkedin: '#',
      twitter: '#',
    },
  },
  {
    name: 'Emily White',
    role: 'Head of Destinations',
    image: 'https://via.placeholder.com/150/B5EAD7/FFFFFF?text=Emily', // Replace with actual image
    bio: 'Emily curates our unique travel packages, always seeking out hidden gems and authentic local encounters.',
    social: {
      linkedin: '#',
      instagram: '#',
    },
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-24 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-extrabold mb-4 animate-fade-in-down">
            About Us: Your Journey, Our Passion
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 animate-fade-in-up">
            Dedicated to crafting unforgettable travel experiences that connect you with the world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-4">
              Founded in 20XX by a group of avid globetrotters, [Your Company Name] began with a simple yet powerful idea: to make authentic and enriching travel accessible to everyone. The company noticed a gap in the market for truly personalized itineraries that went beyond typical tourist traps.
            </p>
            <p className="text-lg leading-relaxed">
              From humble beginnings planning bespoke adventures for friends and family, the company has grown into a trusted name in the tours and travels industry, all while retaining a core belief in the power of exploration and discovery.
            </p>
          </div>
          <div className="lg:w-1/2">
            <img
              src="https://via.placeholder.com/600x400/87CEEB/FFFFFF?text=Our+Story+Image" // Replace with a relevant image
              alt="Our Story"
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Authenticity</h3>
              <p className="text-gray-700">
                Belief in genuine experiences that connect with local cultures and traditions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Sustainability</h3>
              <p className="text-gray-700">
                Committed to responsible tourism, ensuring minimal environmental impact and supporting local communities.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">Excellence</h3>
              <p className="text-gray-700">
                Providing unparalleled service and meticulously planned itineraries for a seamless journey.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-700 transition-colors">
                      <i className="fab fa-linkedin text-2xl"></i> {/* Font Awesome icon */}
                    </a>
                  )}
                  {member.social.twitter && (
                    <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-blue-400 transition-colors">
                      <i className="fab fa-twitter text-2xl"></i> {/* Font Awesome icon */}
                    </a>
                  )}
                  {member.social.instagram && (
                    <a href={member.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-pink-600 transition-colors">
                      <i className="fab fa-instagram text-2xl"></i> {/* Font Awesome icon */}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-600 text-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6">Ready to Plan Your Next Adventure?</h2>
          <p className="text-xl mb-8">
            Explore a diverse range of tours and let us help you create memories that last a lifetime.
          </p>
          <a
            href="/tours" // Link to your tours page
            className="bg-white text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition-colors shadow-lg"
          >
            Explore Tours Now
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
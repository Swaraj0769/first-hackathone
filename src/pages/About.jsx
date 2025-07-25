import React from "react";

// Sample data for team members
const teamMembers = [
  {
    name: "Elizabeth Minchilli",
    role: "Co-Founder & CEO",
    image: "https://viarosaitaly.com/wp-content/uploads/elizabeth-633x800.png", // Replace with actual image
    bio: "With over 15 years in the travel industry, Elizabeth leads with a passion for sustainable tourism and immersive cultural experiences.",
    social: {
      linkedin: "#",
      twitter: "#",
    },
  },
  {
    name: "Sophie Minchilli",
    role: "Co-Founder & CTO",
    image: "https://viarosaitaly.com/wp-content/uploads/sophie-633x800.png", // Replace with actual image
    bio: "Sophie’s expertise in technology ensures seamless booking experiences and innovative travel solutions for our clients.",
    social: {
      linkedin: "https://www.instagram.com/sminchilli/",
      twitter: "#",
    },
  },
  {
    name: "Emma Minchilli",
    role: "Operations Manager",
    image: "https://plus.unsplash.com/premium_photo-1661766386981-1140b7b37193?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fHww", // Replace with actual image
    bio: "Emma curates our unique travel packages, always seeking out hidden gems and authentic local encounters.",
    social: {
      linkedin: "#",
      instagram: "#",
    },
  },
];

const About = () => {
  return (
    <div className="min-h-screen absolute z-1000 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-14 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-extrabold mb-4 animate-fade-in-down">
            Your Journey, Our Passion
          </h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90 animate-fade-in-up">
            Dedicated to crafting unforgettable travel experiences that connect
            you with the world.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:flex lg:items-center lg:space-x-12">
          <div className="lg:w-full text-center p-6 mb-8 lg:mb-0">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Via Rosa</h2>
            <p className="text-lg leading-relaxed mb-4">
              Do you plan your trips around food? Where and what to eat? With
              visits to museums, villas, and monuments squeezed in before the
              next meal? Us too! But if you are like us, you also realize that
              food is not an end in itself. The entire experience of eating in a
              country not your own - getting there, ordering, talking to the
              people who prepare, sell, or grow the food - is just as important
              as what is in your belly. There is a cultural import to every bite
              we eat.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Food may be the map you use to get to a specific place, but we
              believe it is also the key that opens up an entire world. Nowhere
              is this more true than in Italy. All roads may lead to Rome, but
              we would like to invite you to follow us on the roads that lead
              out of it. To explore the dishes, customs, and recipes in
              out-of-the-way regions, towns, villages, and homes that remain off
              of most travelers' radar. More importantly, we would like to
              introduce you to the people who keep these traditions alive.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Our friends and colleagues have generously agreed to open their
              homes and businesses and to share their knowledge (and cheese and
              pasta and bread and wine!) by inviting us to gather around the
              table.
            </p>

            <p className="text-lg leading-relaxed">
              Our trips adopt the culture of food as our compass because we
              think this is not only the most delicious way to travel but also
              the most fulfilling. When we learn about a product like freshly
              made Sicilian sheep’s milk ricotta, for instance, we are learning
              about something that reveals a past and current history that
              exists only in one very specific place. It is this sense of place
              that we would like to share and that you will take home with you.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Our Products
          </h2>
          <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                The Italian Table
              </h3>
              <p className="text-gray-700 mb-2">
                Creating Festive Meals for Family and Friends
              </p>
              <img src="https://viarosaitaly.com/wp-content/uploads/the-italian-table.png" alt="" />
              <button className=" mt-2 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg">
                Order Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-700 mb-2">Live Life the Italian Way</p>
              <img src="https://viarosaitaly.com/wp-content/uploads/the-sweetness-of-doing-nothing.png" alt="" />
              <button className="mt-2 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg">
                Order Now
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">
                Eating My Way Through Italy
              </h3>
              <p className="text-gray-700 leading-0.6">
                Heading Off the Main Roads to Discover the Hidden Treasures of
                the Italian Table
              </p>
              <img src="https://viarosaitaly.com/wp-content/uploads/eating-my-way.jpg" alt="" />
              <button className="mt-2 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-blue-400"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 mb-3">{member.role}</p>
                <p className="text-gray-700 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-4">
                  {member.social.linkedin && (
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-700 transition-colors"
                    >
                      <i className="fab fa-linkedin text-2xl"></i>{" "}
                      {/* Font Awesome icon */}
                    </a>
                  )}
                  {member.social.twitter && (
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-400 transition-colors"
                    >
                      <i className="fab fa-twitter text-2xl"></i>{" "}
                      {/* Font Awesome icon */}
                    </a>
                  )}
                  {member.social.instagram && (
                    <a
                      href={member.social.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600 transition-colors"
                    >
                      <i className="fab fa-instagram text-2xl"></i>{" "}
                      {/* Font Awesome icon */}
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
          <h2 className="text-4xl font-bold mb-6">
            Ready to Plan Your Next Adventure?
          </h2>
          <p className="text-xl mb-8">
            Explore a diverse range of tours and let us help you create memories
            that last a lifetime.
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

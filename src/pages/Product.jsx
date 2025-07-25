// src/pages/Services.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    title: 'Custom Itinerary Planning',
    description:
      'Our custom itineraries are crafted to match your interests, pace, and budget—whether you are chasing adventure, seeking relaxation, or exploring hidden gems. From handpicked accommodations and seamless transport to personalized experiences, we take care of every detail so you can travel with confidence and joy. Let your journey be as unique as you are.'},
  {
    title: 'Accommodation Booking',
    description:
      'Find Your Ideal Stay in Bhopal Explore the charm of Bhopal with the perfect place to stay. Our accommodation booking service offers handpicked hotels, heritage properties, and budget stays across the city—from serene lakefront views to convenient locations near major attractions. Whether you are here for business, leisure, or a spiritual retreat, we ensure a comfortable, secure, and seamless booking experience tailored to your needs. Discover Bhopal with peace of mind and stay that feels just right.'},
  {
    title: 'Transportation Coordination',
    description:
      'Explore Bhopal with ease through our trusted transportation arrangements. Whether you need airport pick-ups, hotel transfers, local sightseeing, or outstation travel, we offer a range of comfortable, well-maintained vehicles with experienced drivers. From solo travelers to large groups, our flexible transport solutions ensure safety, punctuality, and convenience throughout your journey in the City of Lakes. Travel smart, travel smooth—with services tailored to your schedule and needs.'},
  {
    title: 'Guided Tours and Experiences',
    description:
      'Uncover the timeless charm of Bhopal with our enriching Guided Cultural Experiences. Known as the city of lakes and Nawabi elegance, Bhopal offers a perfect blend of history, heritage, and hospitality. Our curated tours take you through majestic landmarks like Taj-ul-Masajid, Shaukat Mahal, and Moti Masjid, while also introducing you to the vibrant art scene at Bharat Bhavan and the Tribal Museum. Interact with local artisans, explore traditional markets, and indulge in authentic Bhopali cuisine. Accompanied by expert local guides, these experiences offer deep insights into the city’s diverse cultural identity, making your journey both memorable and meaningful.'},
  {
    title: 'Group and Private Tours',
    description:
      'Options for intimate private tours or small group journeys, offering flexibility and deeper connection to the culture.',
  },
  {
    title: 'Special Occasion Planning',
    description:
      'Honeymoons, anniversaries, proposals, and family reunions organized with thoughtful touches and seamless logistics.',
  },
  {
    title: '24/7 Support and Concierge Services',
    description:
      'Enhance your travel experience in Bhopal with our premium Concierge Services, designed to offer you comfort, convenience, and personalized attention at every step. From seamless airport pickups and tailored accommodation bookings to exclusive cultural tours and last-minute arrangements, our expert team handles all your travel needs with precision and care. Whether you are exploring Bhopal’s historical landmarks, indulging in local cuisine, or attending business engagements, we ensure a smooth and stress-free journey. With deep local insights and 24/7 support, our concierge service transforms your visit into a truly curated and memorable experience.'},
];

// Reusable service card component
const ServiceCard = ({ title, details }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="border p-4 rounded-md shadow cursor-pointer bg-white hover:bg-gray-50 transition duration-200"
    >
      <h3 className="text-lg font-semibold">{title}</h3>
      {isOpen && <p className="mt-2 text-gray-600">{details}</p>}
    </div>
  );
};

const Product = () => {
  return (
    <div className="bg-white absolute z-1000 min-h-screen py-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-9xl text-center mx-auto">

        {/* Our Products */}
        <section className="py-6 flex items-center justify-center bg-gray-100">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
              Our Products
            </h2>
            <div className="grid text-center grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'The Italian Table',
                  subtitle: 'Creating Festive Meals for Family and Friends',
                  image: 'https://viarosaitaly.com/wp-content/uploads/the-italian-table.png',
                  link: 'https://www.rizzoliusa.com/book/9780847863761/',
                },
                {
                  title: 'Sustainability',
                  subtitle: 'Live Life the Italian Way',
                  image: 'https://viarosaitaly.com/wp-content/uploads/the-sweetness-of-doing-nothing.png',
                  link: 'https://www.amazon.com/gp/product/0008366497/',
                },
                {
                  title: 'Eating My Way Through Italy',
                  subtitle: 'Heading Off the Main Roads to Discover Hidden Treasures',
                  image: 'https://viarosaitaly.com/wp-content/uploads/eating-my-way.jpg',
                  link: 'https://read.macmillan.com/lp/eating-way-italy/',
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-700 mb-2">{product.subtitle}</p>
                  <img src={product.image} alt={product.title} className="w-full h-auto object-cover mb-2" />
                  <NavLink to={product.link} target="_blank" rel="noopener noreferrer">
                    <button className="mt-2 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg">
                      Order Now
                    </button>
                  </NavLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Services */}
        <h1 className="text-4xl font-extrabold text-gray-900 mt-14 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          At Via Rosa Italy, we specialize in curated travel experiences that are authentic, seamless, and unforgettable.
        </p>
        <div className="max-w-6xl flex items-center justify-between flex-wrap mx-auto mt-10 space-y-4">
          {services.map((service, index) => (
            <ServiceCard key={index} title={service.title} details={service.description} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;

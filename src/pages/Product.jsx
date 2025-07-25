// src/pages/Services.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
  {
    title: 'Custom Itinerary Planning',
    description:
      'Personalized travel plans tailored to your interests, budget, and schedule. We work with you to create the perfect trip from start to finish.',
  },
  {
    title: 'Accommodation Booking',
    description:
      'Hand-picked hotels, villas, and unique stays that suit your style—whether it’s luxury, boutique, or countryside charm.',
  },
  {
    title: 'Transportation Coordination',
    description:
      'Private transfers, car rentals, and train tickets arranged seamlessly, ensuring smooth travel across Italy.',
  },
  {
    title: 'Guided Tours and Experiences',
    description:
      'Local expert-guided walking tours, museum visits, wine tastings, cooking classes, and cultural experiences.',
  },
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
      'Real-time support throughout your trip with local experts available for assistance, changes, or emergencies.',
  },
];

const Product = () => {

  const Service = ({ title, details }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleService = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div
        onClick={toggleService}
        className="border p-4 rounded-md shadow cursor-pointer bg-white hover:bg-gray-50 transition duration-200"
      >
        <h3 className="text-lg font-semibold">{title}</h3>
        {isOpen && (
          <p className="mt-2 text-gray-600">
            {details}
          </p>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white absolute z-1000 min-h-screen py-6 px-4 sm:px-6 lg:px-10">
      <div className="max-w-9xl text-center mx-auto">
         {/* Our Values Section */}
      <section className="py-6 flex items-center justify-center bg-gray-100">
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
                <NavLink to="https://www.rizzoliusa.com/book/9780847863761/">Order Now</NavLink>
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                Sustainability
              </h3>
              <p className="text-gray-700 mb-2">Live Life the Italian Way</p>
              <img src="https://viarosaitaly.com/wp-content/uploads/the-sweetness-of-doing-nothing.png" alt="" />
              <button className="mt-2 text-blue-600 border-2 border-blue-600 px-4 py-2 rounded-lg">
                <NavLink to="https://www.amazon.com/gp/product/0008366497/ref=as_li_qf_asin_il_tl?ie=UTF8&tag=eminchilli-20&creative=9325&linkCode=as2&creativeASIN=0008366497&linkId=92dfde0ca49079a3400391ac50811bb1">Order Now</NavLink>
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
                <NavLink to="https://read.macmillan.com/lp/eating-way-italy/">Order Now</NavLink>
              </button>
            </div>
          </div>
        </div>
      </section>
        <h1 className="text-4xl font-extrabold text-gray-900 mt-14 mb-4">Our Services</h1>
        <p className="text-lg text-gray-600 mb-12">
          At Via Rosa Italy, we specialize in curated travel experiences that are authentic, seamless, and unforgettable.
        </p>
        <div className="max-w-xl mx-auto mt-10 space-y-4">
      {services.map((service, index) => (
        <Product key={index} title={service.title} details={service.details} />
      ))}
    </div>
      </div>
    </div>
  );
}

export default Product;
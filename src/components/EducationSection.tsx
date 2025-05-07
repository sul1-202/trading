import React from "react";

const EducationSection: React.FC = () => {
  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center">
          <img
            src="https://zerodha.com/static/images/index-education.svg"
            alt="Varsity Education"
            className="w-72 h-auto"
          />
        </div>

        {/* Right: Content */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">
            Free and open market education
          </h2>
          <p className="text-gray-600 mb-4 text-lg">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline block mb-4">
            Varsity →
          </a>
          <p className="text-gray-600 mb-2 text-lg">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href="#"
            className="text-blue-600 font-medium hover:underline block">
            TradingQ&A →
          </a>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-20">
        <h3 className="text-2xl font-semibold mb-2">Open a Zytrade account</h3>
        <p className="text-gray-600 mb-6">
          Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
          F&O trades.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition">
          Sign up for free
        </button>
      </div>
    </section>
  );
};

export default EducationSection;

import React from "react";

const PricingSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
        {/* Text Block */}
        <div>
          <h2 className="text-3xl font-semibold mb-4">Unbeatable pricing</h2>
          <p className="text-lg text-gray-600 mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="text-blue-600 font-medium hover:underline">
            See pricing →
          </a>
        </div>

        {/* Pricing Icons */}
        <div className="flex flex-wrap gap-10 justify-center">
          <div className="text-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free account opening"
              className="w-20 h-20 mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">Free account opening</p>
          </div>

          <div className="text-center">
            <img
              src="https://zerodha.com/static/images/pricing-eq.svg"
              alt="Free equity delivery"
              className="w-20 h-20 mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">
              Free equity delivery
              <br />
              and direct mutual funds
            </p>
          </div>

          <div className="text-center">
            <img
              src="https://zerodha.com/static/images/other-trades.svg"
              alt="Intraday and F&O"
              className="w-20 h-20 mx-auto mb-2"
            />
            <p className="text-sm text-gray-600">₹20 Intraday and F&amp;O</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

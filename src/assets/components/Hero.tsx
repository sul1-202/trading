import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 text-center bg-white">
      <img
        src="https://zerodha.com/static/images/landing.png"
        alt="Investment dashboard preview"
        className="max-w-5xl w-full mb-10"
      />

      <h1 className="text-4xl font-semibold mb-4 text-gray-800">
        Invest in everything
      </h1>

      <p className="text-lg text-gray-600 mb-6 max-w-xl">
        Online platform to invest in stocks, derivatives, mutual funds, ETFs,
        bonds, and more.
      </p>

      <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition">
        Sign up for free
      </button>
    </section>
  );
};

export default Hero;

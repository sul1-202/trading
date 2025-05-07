import React from "react";

const TrustSection: React.FC = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Section */}
        <div className="space-y-8">
          <div>
            <h2 className="text-3xl font-semibold mb-4">
              Trust with confidence
            </h2>
            <p className="text-lg font-medium text-gray-700">
              Customer-first always
            </p>
            <p className="text-gray-600">
              That’s why 1.6+ crore customers trust Zytrade with ~₹6 lakh crores
              of equity investments and contribute to 15% of daily retail
              exchange volumes in India.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-700">
              No spam or gimmicks
            </p>
            <p className="text-gray-600">
              No gimmicks, spam, “gamification”, or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
              <a href="#" className="text-blue-600 underline ml-1">
                Our philosophies
              </a>
              .
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-700">
              The Zytrade universe
            </p>
            <p className="text-gray-600">
              Not just an app, but a whole ecosystem. Our investments in 30+
              fintech startups offer you tailored services specific to your
              needs.
            </p>
          </div>

          <div>
            <p className="text-lg font-medium text-gray-700">
              Do better with money
            </p>
            <p className="text-gray-600">
              With initiatives like{" "}
              <span className="text-blue-600 underline">Nudge</span> and{" "}
              <span className="text-blue-600 underline">Kill Switch</span>, we
              don’t just facilitate transactions, but actively help you do
              better with your money.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex justify-center">
          <img
            src="https://zerodha.com/static/images/ecosystem.png"
            alt="Zerodha ecosystem"
            className="w-full max-w-md"
          />
        </div>
      </div>

      {/* Optional bottom links */}
      <div className="text-center mt-12 space-x-8">
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Explore our products →
        </a>
        <a href="#" className="text-blue-600 font-medium hover:underline">
          Try Kite demo →
        </a>
      </div>
    </section>
  );
};

export default TrustSection;

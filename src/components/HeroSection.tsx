import React, { useEffect, useState } from "react";

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen pt-24 pb-16 flex items-center">
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(24, 78, 194, 0.95), rgba(36, 198, 186, 0.8))",
        }}
      />

      <div className="container mx-auto px-4">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Coming Soon!
          </h3>
          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            We're working hard to bring you something amazing.{" "}
            <span className="text-teal-200">Stay tuned!</span>
          </p>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8 leading-relaxed">
            Contact us:{" "}
            <a
              className="text-teal-200"
              href="mailto:info@linktalentsupport.com"
            >
              info@linktalentsupport.com
            </a>
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="mailto:info@linktalentsupport.com"
              className="btn-primary inline-flex items-center justify-center"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

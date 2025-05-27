import React from 'react';

const ImageSection: React.FC = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className="relative rounded-lg overflow-hidden shadow-xl transform transition-transform hover:scale-[1.02]">
              <img 
                src="https://i.ibb.co/NpXfngx/LTS-Logo.jpg"
                alt="Link Talent Support Logo" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold text-navy mb-6">Building the Future of Construction Talent</h2>
            <p className="text-lg text-gray-700 mb-4 leading-relaxed">
              At Link Talent Support, we're creating a platform that connects construction professionals with the projects that need their expertise.
            </p>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our platform is currently under construction, but we're working hard to bring you a seamless experience that revolutionizes how talent and projects connect in the construction industry.
            </p>
            
            <div className="flex items-center">
              <div className="w-12 h-1 bg-teal-500 mr-4"></div>
              <p className="text-navy font-medium">Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
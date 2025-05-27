import React from 'react';
import { Building2, Users, Briefcase, Calendar } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description, delay }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 transition-all duration-500 hover:shadow-lg"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-navy mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

const FeatureSection: React.FC = () => {
  const features = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Construction Talent",
      description: "Connecting skilled workers with construction projects that need their expertise.",
      delay: 100
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Talent Support",
      description: "Providing resources and support for construction professionals at every career stage.",
      delay: 200
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Project Matching",
      description: "Matching the right talent with the right projects to ensure success for all parties.",
      delay: 300
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Coming Soon",
      description: "Our platform is under construction. Sign up to be notified when we launch.",
      delay: 400
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-navy text-center mb-12">What We're Building</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
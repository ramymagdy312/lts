import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setEmail('');
    }, 1000);
  };

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-100 text-teal-500 mb-6">
            <Mail className="w-8 h-8" />
          </div>
          
          <h2 className="text-3xl font-bold text-navy mb-4">Stay Updated</h2>
          <p className="text-lg text-gray-700 mb-8">
            We're launching soon! Leave your email to be notified when we're ready.
          </p>
          
          {submitted ? (
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-6 animate-fade-in">
              <h3 className="text-xl font-semibold text-teal-700 mb-2">Thank You!</h3>
              <p className="text-teal-600">
                We've received your email and will notify you when we launch.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-grow">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className={`px-6 py-3 rounded-lg bg-navy text-white font-medium transition-all flex items-center justify-center ${
                    loading ? 'opacity-70 cursor-wait' : 'hover:bg-navy/90'
                  }`}
                >
                  {loading ? (
                    <span className="animate-pulse">Sending...</span>
                  ) : (
                    <>
                      Notify Me <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              Or reach out directly at{' '}
              <a 
                href="mailto:info@linktalentsupport.com" 
                className="text-teal-600 font-medium hover:underline"
              >
                info@linktalentsupport.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
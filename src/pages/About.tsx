import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <>
      <Helmet>
        <title>About AI Magic Box - Your Ultimate AI Tools Directory & Resource Hub | AI Magic Box</title>
        <meta 
          name="description" 
          content="Learn about AI Magic Box, your comprehensive directory for discovering AI tools and resources. Our mission is to help you find the perfect AI solutions for your needs, curated weekly with the latest innovations in artificial intelligence."
        />
      </Helmet>
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-primary mb-6">About AI Magic Box</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive directory for discovering and exploring the latest AI tools and innovations
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6">Our Mission</h2>
          <p className="text-gray-600 mb-6">
            At AI Magic Box, we're passionate about making artificial intelligence accessible to everyone. 
            Our platform serves as a bridge between innovative AI tools and the people who need them, 
            helping you discover the perfect solutions for your unique needs.
          </p>
          <p className="text-gray-600">
            We carefully curate and categorize AI tools across various domains, from productivity and 
            content creation to art generation and team collaboration, ensuring you stay ahead in the 
            rapidly evolving world of AI technology.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Easy Discovery</h3>
            <p className="text-gray-600">
              Find the perfect AI tools quickly with our intuitive categorization and search features.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Weekly Updates</h3>
            <p className="text-gray-600">
              Stay current with regular updates featuring the latest AI innovations and tools.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-3xl mb-4">💡</div>
            <h3 className="text-xl font-semibold text-primary mb-3">Detailed Insights</h3>
            <p className="text-gray-600">
              Get comprehensive information about each tool, including features, use cases, and user feedback.
            </p>
          </div>
        </div>

        {/* Contact Section */}
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions or suggestions? We'd love to hear from you. Reach out to us for any inquiries 
            about our platform or to suggest new AI tools for our directory.
          </p>
          <a
            href="mailto:contact@aimagicbox.com"
            className="inline-flex items-center justify-center px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </>
  );
};

export default About; 
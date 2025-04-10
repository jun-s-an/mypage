import Layout from '../components/Layout';
import { motion } from 'framer-motion';

export async function getStaticProps() {
  try {
    const updatesResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updates`);
    const updates = updatesResponse.ok ? await updatesResponse.json() : [];

    return {
      props: {
        updates
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        updates: []
      }
    };
  }
}

export default function Home({ updates }) {
  return (
    <Layout title="Home">
      <div className="grid-container">
        <div className="grid grid-2-columns">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid-item"
          >
            <div className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
              <p>Welcome to my personal website! I'm passionate about technology and always eager to learn and share knowledge. Feel free to explore my projects and get in touch.</p>
            </div>
            <div className="profile-section">
              <img 
                src="/assets/profile.jpg" 
                alt="Profile Picture" 
                className="profile-image"
              />
              <div className="social-links">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/assets/linkedin-icon.svg" alt="LinkedIn" className="social-icon" />
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <img src="/assets/github-icon.svg" alt="GitHub" className="social-icon" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid-item"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What's New</h2>
            <div className="space-y-6">
              {updates.map((update, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ x: 5 }}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-500"
                >
                  <p className="text-gray-600 mb-2">{update.date}</p>
                  <p className="text-gray-900">{update.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}

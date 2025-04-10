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
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16"
        >
          <div className="flex flex-col items-center md:items-start space-y-6">
            <motion.img 
              whileHover={{ scale: 1.05 }}
              src="/assets/profile.jpg" 
              alt="Profile Picture" 
              className="w-64 h-64 rounded-full object-cover shadow-xl"
            />
            <div className="flex space-x-6">
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200"
              >
                <img src="/assets/linkedin-icon.svg" alt="LinkedIn" className="w-10 h-10" />
              </motion.a>
              <motion.a 
                whileHover={{ scale: 1.1 }}
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="transition-transform duration-200"
              >
                <img src="/assets/github-icon.svg" alt="GitHub" className="w-10 h-10" />
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <h1 className="text-4xl font-bold text-gray-900">About Me</h1>
            <div className="prose prose-lg max-w-none">
              <p>Welcome to my personal website! I'm passionate about technology and always eager to learn and share knowledge. Feel free to explore my projects and get in touch.</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Updates Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gray-50 rounded-xl p-8 shadow-sm"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">What's New</h2>
          <div className="space-y-6">
            {updates.map((update, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500"
              >
                <p className="text-gray-600 mb-1">{update.date}</p>
                <p className="text-gray-900">{update.content}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

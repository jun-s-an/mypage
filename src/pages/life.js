import Layout from '../components/Layout';
import Timeline from '../components/Timeline';

export default function Life() {
  return (
    <Layout title="Life">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Life Timeline</h1>
        <p className="text-center mb-8 text-gray-600">
          A journey through my life experiences and adventures
        </p>
        <Timeline />
      </div>
    </Layout>
  );
}

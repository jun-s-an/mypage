import Layout from '../components/Layout';

export async function getStaticProps() {
  try {
    const readmeResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/README.md`);
    const readmeContent = readmeResponse.ok ? await readmeResponse.text() : '';

    const updatesResponse = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/updates`);
    const updates = updatesResponse.ok ? await updatesResponse.json() : [];

    return {
      props: {
        readmeContent,
        updates
      }
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        readmeContent: '',
        updates: []
      }
    };
  }
}

export default function Home({ readmeContent, updates }) {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6">
        <div className="flex flex-col items-center">
          <img src="/profile.jpg" alt="Profile Picture" className="w-48 h-48 rounded-full mb-4" />
          <div className="flex space-x-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin-icon.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <img src="/github-icon.svg" alt="GitHub" className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">About Me</h2>
          <div className="prose" dangerouslySetInnerHTML={{ __html: readmeContent }}></div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">What&apos;s New</h3>
        {updates.map((update, index) => (
          <p key={index}><strong>{update.date}:</strong> {update.content}</p>
        ))}
      </div>
    </Layout>
  );
}

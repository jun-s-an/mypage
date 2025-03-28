import Layout from '../components/Layout';

export default function Projects() {
  return (
    <Layout title="Projects">
      <h2>My Projects</h2>
      <p>A short intro to your projects portfolio section.</p>

      {/* Example grid of project cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <section className="card">
          <h3>Project 1</h3>
          <p>A brief summary of the project or the problems it solves.</p>
        </section>

        <section className="card">
          <h3>Project 2</h3>
          <p>Highlight the tools or technologies used, plus any achievements.</p>
        </section>

        {/* Add more cards as needed */}
      </div>
    </Layout>
  );
}

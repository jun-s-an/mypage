import Link from 'next/link';
import Layout from '../components/Layout';

export default function Home() {
  return (
    <Layout title="Home">
      <section>
        <h2>Welcome to My Portfolio</h2>
        <p>A quick introduction or hero section can go here.</p>
        <p>
          Explore my{' '}
          <Link href="/projects">
            Projects
          </Link>{' '}
          or read more{' '}
          <Link href="/about">
            About Me
          </Link>
          .
        </p>
      </section>

      {/* Example card with a CTA button */}
      <section className="card">
        <h3>Featured Project</h3>
        <p>A brief overview of a recent project. Include a screenshot or some details.</p>
        <Link href="/projects">
          <button className="button">View All Projects</button>
        </Link>
      </section>
    </Layout>
  );
}

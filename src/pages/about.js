import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <h2>About Me</h2>
      <p>
        Insert your biography, background, or any relevant personal details here.
      </p>

      {/* Optionally, another card with more info */}
      <section className="card">
        <h3>Experience & Skills</h3>
        <ul>
          <li>Skill #1</li>
          <li>Skill #2</li>
          <li>Skill #3</li>
        </ul>
      </section>

      <p>
        <Link href="/">
          <button className="button">Return Home</button>
        </Link>
      </p>
    </Layout>
  );
}

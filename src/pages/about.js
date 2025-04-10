import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {
  return (
    <Layout title="About">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: 1 }}>
          <h2>About Me</h2>
          <p>
            Insert your biography, background, or any relevant personal details here.
          </p>
        </div>
        <div className="spotify-embed" style={{ width: '300px' }}>
          <iframe
            style={{ borderRadius: '12px' }}
            src="https://open.spotify.com/embed/playlist/55MwEPwbb7RPgjBZ8YYwCb?utm_source=generator&theme=0"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>
      </div>

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

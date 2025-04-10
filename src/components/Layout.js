// components/Layout.js
import Head from 'next/head';
import Link from 'next/link';

export default function Layout({ children, title }) {
  return (
    <>
      <Head>
        <title>{title ? `${title} | My Portfolio` : 'My Portfolio'}</title>
        <meta name="description" content="My portfolio site" />
      </Head>


      <header>
        <h1>준</h1>
        <nav className="main-nav" style={{ marginTop: '0rem' }}>
          <Link href="/" className="nav-link">Home</Link>
          {' | '}
          <Link href="/about" className="nav-link">About</Link>
          {' | '}
          <Link href="/projects" className="nav-link">Projects</Link>
          {' | '}
          <Link href="/life" className="nav-link">인생(Life)</Link>
        </nav>
      </header>

      <main style={{ padding: '1rem' }}>
        {children}
      </main>

      <footer style={{ textAlign: 'center', padding: '1rem' }}>
        <hr />
        <p>© 2025 My Name</p>
      </footer>
    </>
  );
}

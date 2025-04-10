export default function InteractivePlot({ src, title, description }) {
  return (
    <div className="plot-card">
      <h3>{title}</h3>
      <div className="plot-container">
        <iframe
          src={src}
          title={title}
          style={{ width: '100%', height: '500px', border: 'none' }}
        />
      </div>
      <p>{description}</p>
      <style jsx>{`
        .plot-card {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 2rem;
        }
        .plot-container {
          margin: 1rem 0;
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 4px;
        }
        h3 {
          margin: 0 0 1rem 0;
          color: #333;
        }
        p {
          color: #666;
          margin: 0.5rem 0 0 0;
        }
      `}</style>
    </div>
  );
} 
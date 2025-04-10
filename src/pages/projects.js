import Layout from '../components/Layout';
import InteractivePlot from '../components/plots/InteractivePlot';

export default function Projects() {
  return (
    <Layout title="Projects">
      <h2>My Projects</h2>
      <p>Here are some of my interactive data visualization projects and analyses.</p>

      <div className="kanban-board">
        <div className="kanban-column">
          <h3>Finished</h3>
          <div className="projects-container">
            <InteractivePlot
              src="/plots/animated_scatter.html"
              title="Animated Scatter Plot"
              description="A dynamic visualization showing the evolution of data points over time. Click the play button to see the animation and observe patterns in the data."
            />

            <InteractivePlot
              src="/plots/parallel_coordinates.html"
              title="Parallel Coordinates Plot"
              description="A multivariate analysis tool that allows you to explore relationships between multiple variables. Drag the axes to reorder them and highlight patterns in the data."
            />

            <InteractivePlot
              src="/plots/sunburst.html"
              title="Hierarchical Sunburst Chart"
              description="An interactive hierarchical visualization showing the composition of different regions. Click on segments to drill down into the data and explore the hierarchy."
            />
          </div>
        </div>

        <div className="kanban-column">
          <h3>In Progress</h3>
          <div className="projects-container">
            <InteractivePlot
              src="/plots/3d_surface.html"
              title="3D Surface Plot with Contour"
              description="An interactive 3D visualization of a mathematical surface. Rotate, zoom, and explore the 3D space to understand the complex relationships between variables."
            />

            <InteractivePlot
              src="/plots/network_graph.html"
              title="Interactive Network Graph"
              description="A force-directed graph visualization showing relationships between nodes. Hover over nodes to see connections and drag nodes to explore the network structure."
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .kanban-board {
          display: flex;
          gap: 2rem;
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
        }

        .kanban-column {
          flex: 1;
          background: #f5f5f5;
          border-radius: 8px;
          padding: 1rem;
        }

        .kanban-column h3 {
          text-align: center;
          margin-bottom: 1rem;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid #ddd;
          color: #2c3e50;
          font-weight: 600;
        }

        .projects-container {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        h2 {
          text-align: center;
          margin-bottom: 1rem;
        }

        p {
          text-align: center;
          margin-bottom: 2rem;
          color: #666;
        }

        @media (max-width: 768px) {
          .kanban-board {
            flex-direction: column;
          }
        }
      `}</style>
    </Layout>
  );
}

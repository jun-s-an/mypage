import plotly.graph_objects as go
import plotly.io as pio
import numpy as np
import pandas as pd
from pathlib import Path
import os

# Get the absolute path to the project root
project_root = Path(__file__).parent.parent
plots_dir = project_root / 'public' / 'plots'

# Create plots directory if it doesn't exist
os.makedirs(plots_dir, exist_ok=True)
print(f"Plots will be saved to: {plots_dir}")

# 1. 3D Surface Plot with Contour
x = np.linspace(-5, 5, 100)
y = np.linspace(-5, 5, 100)
X, Y = np.meshgrid(x, y)
Z = np.sin(np.sqrt(X**2 + Y**2))
fig = go.Figure(data=[go.Surface(x=X, y=Y, z=Z, colorscale='Viridis')])
fig.update_layout(
    title='3D Surface Plot with Contour',
    scene=dict(
        xaxis_title='X',
        yaxis_title='Y',
        zaxis_title='Z',
        camera=dict(
            eye=dict(x=1.5, y=1.5, z=1.5)
        )
    ),
    template='plotly_white'
)
pio.write_html(fig, plots_dir / '3d_surface.html')

# 2. Animated Scatter Plot
np.random.seed(42)
frames = []
for i in range(10):
    x = np.random.rand(50)
    y = np.random.rand(50)
    frames.append(go.Frame(data=[go.Scatter(x=x, y=y, mode='markers')]))

fig = go.Figure(
    data=[go.Scatter(x=[], y=[], mode='markers')],
    frames=frames,
    layout=go.Layout(
        title='Animated Scatter Plot',
        xaxis=dict(range=[0, 1]),
        yaxis=dict(range=[0, 1]),
        updatemenus=[dict(
            type='buttons',
            buttons=[dict(
                label='Play',
                method='animate',
                args=[None, dict(frame=dict(duration=500, redraw=True), fromcurrent=True)]
            )]
        )]
    )
)
pio.write_html(fig, plots_dir / 'animated_scatter.html')

# 3. Interactive Parallel Coordinates Plot
df = pd.DataFrame({
    'A': np.random.randn(100),
    'B': np.random.randn(100),
    'C': np.random.randn(100),
    'D': np.random.randn(100),
    'E': np.random.randn(100)
})
fig = go.Figure(data=go.Parcoords(
    line=dict(color=df['A'], colorscale='Viridis'),
    dimensions=list([
        dict(range=[df['A'].min(), df['A'].max()], label='A', values=df['A']),
        dict(range=[df['B'].min(), df['B'].max()], label='B', values=df['B']),
        dict(range=[df['C'].min(), df['C'].max()], label='C', values=df['C']),
        dict(range=[df['D'].min(), df['D'].max()], label='D', values=df['D']),
        dict(range=[df['E'].min(), df['E'].max()], label='E', values=df['E'])
    ])
))
fig.update_layout(title='Interactive Parallel Coordinates Plot')
pio.write_html(fig, plots_dir / 'parallel_coordinates.html')

# 4. Sunburst Chart with Hierarchical Data
fig = go.Figure(go.Sunburst(
    labels=["World", "Asia", "Europe", "Africa", "North America", "South America", "Oceania",
            "China", "India", "Japan", "Germany", "France", "UK", "Nigeria", "Egypt", "South Africa",
            "USA", "Canada", "Mexico", "Brazil", "Argentina", "Chile", "Australia", "New Zealand"],
    parents=["", "World", "World", "World", "World", "World", "World",
             "Asia", "Asia", "Asia", "Europe", "Europe", "Europe", "Africa", "Africa", "Africa",
             "North America", "North America", "North America", "South America", "South America", "South America",
             "Oceania", "Oceania"],
    values=[100, 30, 20, 15, 15, 10, 10,
            10, 10, 10, 7, 7, 6, 5, 5, 5,
            10, 3, 2, 4, 3, 3, 7, 3],
    branchvalues="total"
))
fig.update_layout(title='Interactive Sunburst Chart')
pio.write_html(fig, plots_dir / 'sunburst.html')

# 5. Interactive Network Graph
import networkx as nx
G = nx.random_geometric_graph(20, 0.3)
pos = nx.spring_layout(G)

edge_trace = go.Scatter(
    x=[], y=[], line=dict(width=0.5, color='#888'), hoverinfo='none', mode='lines')

for edge in G.edges():
    x0, y0 = pos[edge[0]]
    x1, y1 = pos[edge[1]]
    edge_trace['x'] += tuple([x0, x1, None])
    edge_trace['y'] += tuple([y0, y1, None])

node_trace = go.Scatter(
    x=[], y=[], text=[], mode='markers+text', hoverinfo='text',
    marker=dict(
        showscale=True,
        colorscale='YlGnBu',
        size=10,
        color=[],
        line=dict(width=2)))

for node in G.nodes():
    x, y = pos[node]
    node_trace['x'] += tuple([x])
    node_trace['y'] += tuple([y])
    node_trace['text'] += tuple([f'Node {node}'])

fig = go.Figure(data=[edge_trace, node_trace],
                layout=go.Layout(
                    title='Interactive Network Graph',
                    showlegend=False,
                    hovermode='closest',
                    margin=dict(b=20, l=5, r=5, t=40),
                    xaxis=dict(showgrid=False, zeroline=False, showticklabels=False),
                    yaxis=dict(showgrid=False, zeroline=False, showticklabels=False))
                )
pio.write_html(fig, plots_dir / 'network_graph.html')

print("All plots generated successfully!") 
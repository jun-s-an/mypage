export default function handler(req, res) {
    const updates = [
      { date: "2025-04-02", content: "Added Spotify playlist to About Me section." },
      { date: "2025-04-01", content: "Improved project Kanban layout." },
      { date: "2025-03-30", content: "Deployed initial version of the portfolio website." }
    ];
  
    res.status(200).json(updates);
  }
  
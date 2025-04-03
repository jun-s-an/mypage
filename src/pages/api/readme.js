import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', 'README.md');
  
  try {
    const readmeContent = fs.readFileSync(filePath, 'utf8');
    res.status(200).send(readmeContent);
  } catch (error) {
    console.error('Error reading README file:', error);
    res.status(500).json({ error: 'Failed to load README content' });
  }
}

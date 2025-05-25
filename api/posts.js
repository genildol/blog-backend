import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  const postsPath = path.resolve('posts.json');

  try {
    const posts = JSON.parse(fs.readFileSync(postsPath, 'utf-8'));
    res.status(200).json({ posts });
  } catch (error) {
    console.error('Erro ao carregar os posts:', error);
    res.status(500).json({ error: 'Falha ao carregar os posts.' });
  }
}


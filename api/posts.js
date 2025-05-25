import Fastify from 'fastify';
import serverless from 'serverless-http';

const fastify = Fastify({
  logger: true,
});

fastify.get('/api/posts', async (request, reply) => {
  const posts = require('../posts.json');
  return { posts };
});


export default serverless(fastify);

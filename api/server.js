const serverless = require('serverless-http');

const fastify = require('fastify')({ logger: true });

fastify.get('/api/posts', async (request, reply) => {
  const posts = require('./posts.json');
  return { posts };
});


export default serverless(fastiify);


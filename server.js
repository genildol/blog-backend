const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
  const posts = require('./posts.json');
  return { posts };
});

fastify.listen({
  port: 3000,
}, (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  fastify.log.info(`Server listening at ${address}`);
});


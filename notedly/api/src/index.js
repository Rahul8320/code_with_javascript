const express = require('express');

const port = process.env.PORT || 4000;

// app.get('/', (req,res) => res.send("Hello node World!!!"));
// app.listen(4000, () => console.log(`Server is running at http://localhost:${port}!`));

const { ApolloServer, gql } = require('apollo-server-express');

// Construct a schema, using GraphQL's schema language
const typeDefs = gql`type Query {hello : String}`;

// Provide resolver functions for our schema fields
const resolvers = {
	Query: {
		hello: () => 'Hello world!'
	}
};

const app = express();

// Apollo Server setup
const server = new ApolloServer({ typeDefs, resolvers });

// Apply the Apollo GraphQL middleware and set the path to /api
server.applyMiddleware({ app, path: '/api' });

app.listen({ port }, () => console.log(`GraphQL Server running at http://localhost:${port}${server.graphqlPath}`))
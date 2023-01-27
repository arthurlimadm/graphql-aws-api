import { graphqlHTTP } from 'express-graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'
const data = {
    warriors: [
      { id: '001', name: 'Jaime' },
      { id: '002', name: 'Jorah' },
    ],
}

const typeDefs = `
type Warrior {
    id: ID!
    name: String!
}

type Query {
    Warriors: [Warrior]
}`

const resolvers = {
    Query: {
        warriors: (obj, args, context, info) => context.warriors
    }
} 

const executableSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export const GraphQlConfig = {
    schema: executableSchema,
    context: data,
    graphiql: true
}
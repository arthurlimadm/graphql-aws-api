import { Request, Router, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQlConfig } from "../middlewares/GraphQL";

const router = Router()

router.get('graphql', (req: Request, res: Response)=> {
    graphqlHTTP(GraphQlConfig)
})

export default router
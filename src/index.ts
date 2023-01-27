import Express  from "express";
import cors from 'cors'
import { LocalVariables } from "./config/LocalVariables";
import router from "./routes";

const app = Express()
app.use(cors())
app.use(Express.urlencoded({extended: true}))
app.use(router)

app.listen(LocalVariables.serverPort, ()=> {
    console.log(`Server running on port: ${LocalVariables.serverPort}`)
})

export default app
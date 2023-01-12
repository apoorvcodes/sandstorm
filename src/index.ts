import express, {Express, Request, Response} from "express"
import { config } from "dotenv";
import { HOST, PORT } from "./constants";
import router from "./fileRouter";
config();
const app:Express = express();

router.mutate(app)
app.get("/", (req: Request, res: Response) => {
 console.log(req.body)
 res.send("Hello")
})
app.listen(PORT,HOST,() => {
    console.log("Server up and running;")
} )

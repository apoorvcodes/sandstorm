import express, {Express} from "express"
import { config } from "dotenv";
import { HOST, PORT } from "./constants";

config();
const app:Express = express();



app.listen(PORT,HOST,() => {
    console.log("Server up and running;")
} )

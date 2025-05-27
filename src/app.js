import expres from "express"
import cors from "cors"
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
dotenv.config()

dotenv.use(cors({ path: "./.env" }))
const app=expres();

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))

app.use(expres.json({limit:"16kb"})) // Limit the size of JSON payloads
app.use(expres.urlencoded({extended:true,limit:"16kb"}))
app.use(expres.static("public")) // Serve static files from the "public" directory and static files like images ,favicons,css,js etc
app.use(cookieParser()); // Parse cookies from incoming requests



export  {app}
import express from "express";
import { join } from "path";
import socketIO from "socket.io";

const PORT = 4000;
const app = express();

app.set("view engine","pug");
app.set("views",join(__dirname,"views")); 
app.get("/",(req,res) => res.render("home")); // localhost:PORT/
app.use(express.static(join(__dirname,"static"))); // localhost:PORT/static파일이름 -> 프론트엔드

const handleListening = () => console.log(`server running: http://localhost:${PORT}`);
app.listen(PORT,handleListening);
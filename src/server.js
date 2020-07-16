import express from "express";
import { join } from "path";
import socketIO from "socket.io";
import logger from "morgan";

const PORT = 4000;
const app = express();

app.set("view engine","pug");
app.set("views",join(__dirname,"views")); 
app.use(logger("dev"));
app.use(express.static(join(__dirname,"static"))); // localhost:PORT/static파일이름 -> 프론트엔드
app.get("/",(req,res) => res.render("home")); // localhost:PORT/

const handleListening = () => console.log(`server running: http://localhost:${PORT}`);

const server = app.listen(PORT,handleListening);
// 해당 서버를 잡고 있어라 -> 한 port에 2개의 서버 -> 서버 위에 서버
// 서버와 클라이언트 둘 다 가능
let sockets = [];
const io = socketIO.listen(server);
io.on("connection", (socket) => {
    sockets.push(socket.id);
}); 
setInterval(() => console.log(sockets),1000);
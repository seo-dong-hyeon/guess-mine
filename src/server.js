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
const io = socketIO.listen(server); // socket 서버 변수

// 서버 -> 누군가 연결 -> 이벤트 발생 -> 접속 브라우저로
io.on("connection", (socket) => { // 방금 접속한 socket
    //setTimeout(() => socket.broadcast.emit("Hello"),5000); // 이벤트 발생
    socket.on("Hello guys",() => console.log("client say!"));
}); 

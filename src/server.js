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

// socket 통신 -> 서버 메모리 -> 쿠키 필요x
// 새로고침(파일 다시 저장) -> nodemon이 서버 다시 시작 -> 기존 socket들 -> 연결만 유지, 메모리는 다 지워짐
// 메모리 유지 -> 데이터베이스
io.on("connection", (socket) => { 
    socket.on("New Message",({ message }) => {
        socket.broadcast.emit("messageNotif", { // socket에게 받은 message와 그 socket의 nickname 전달
            message:message,
            nickName: socket.nickName
        });
    });
    socket.on("setNickName",({nickName}) => {
        socket.nickName = nickName; // socket은 객체
    })
}); 

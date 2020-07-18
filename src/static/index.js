const socket = io("/");

function setNickName(nickName){
    socket.emit("setNickName", {nickName});

}

// 새로 연결된 socket
function sendMessage(message){
    socket.emit("New Message", {message:message});
    console.log(`You : ${message}`);
}

// 기존에 연결되어있던 socket
function handleMessageNotif(data){
    const {message, nickName} = data;
    console.log(`${nickName} : ${message}`);
}
socket.on("messageNotif", handleMessageNotif);
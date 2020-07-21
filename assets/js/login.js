const { initSockets } = require("./sockets");

const LOGGED_OUT = "loggedOut",
    LOGGED_IN = "loggedIn",
    NICKNAME = "nickname";

const body = document.querySelector("body"),
    loginForm = document.getElementById("jsLogin"),
    nickname = localStorage.getItem(NICKNAME);

const login = (nickname) => {    
    const socket = io("/"); // socket 변수 전역 변수화
    socket.emit(window.events.setNickname,{nickname}); // 전역 변수 setNickname 
    initSockets(socket);
}

if(nickname === null){
    body.className = LOGGED_OUT;
}
else{
    body.className = LOGGED_IN;
    login(nickname);
}

const handleFormSubmit = e => {
    e.preventDefault();
    const input = loginForm.querySelector("input");
    const {value} = input;
    localStorage.setItem(NICKNAME,value);
    body.className = LOGGED_IN;
    login(value);
};
  
if (loginForm) {
    loginForm.addEventListener("submit", handleFormSubmit);
}
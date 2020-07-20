const LOGGED_OUT = "loggedOut",
    LOGGED_IN = "loggedIn",
    NICKNAME = "nickname";

const body = document.querySelector("body"),
    loginForm = document.getElementById("jsLogin"),
    nickname = localStorage.getItem(NICKNAME);

const login = (nickname) => {    
    const socket = io("/"); // 연결
    socket.emit("setNickname",{nickname});
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
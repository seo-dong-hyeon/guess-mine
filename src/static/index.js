const socket = io("/");
socket.on("Hello", () => console.log("Somebody joined")); // 서버로부터의 이벤트를 듣고 있음

setTimeout(() => socket.emit("Hello guys"),5000); // 클라이언트 이벤트 

(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./login");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfMThkZDQzZWIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vbG9naW5cIjsiXX0=
},{"./login":2}],2:[function(require,module,exports){
"use strict";

var LOGGED_OUT = "loggedOut",
    LOGGED_IN = "loggedIn",
    NICKNAME = "nickname";
var body = document.querySelector("body"),
    loginForm = document.getElementById("jsLogin"),
    nickname = localStorage.getItem(NICKNAME);

var login = function login(nickname) {
  var socket = io("/"); // 연결

  socket.emit("setNickname", {
    nickname: nickname
  });
};

if (nickname === null) {
  body.className = LOGGED_OUT;
} else {
  body.className = LOGGED_IN;
  login(nickname);
}

var handleFormSubmit = function handleFormSubmit(e) {
  e.preventDefault();
  var input = loginForm.querySelector("input");
  var value = input.value;
  localStorage.setItem(NICKNAME, value);
  body.className = LOGGED_IN;
  login(value);
};

if (loginForm) {
  loginForm.addEventListener("submit", handleFormSubmit);
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic29ja2V0IiwiaW8iLCJlbWl0IiwiY2xhc3NOYW1lIiwiaGFuZGxlRm9ybVN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImlucHV0IiwidmFsdWUiLCJzZXRJdGVtIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFNQSxVQUFVLEdBQUcsV0FBbkI7QUFBQSxJQUNJQyxTQUFTLEdBQUcsVUFEaEI7QUFBQSxJQUVJQyxRQUFRLEdBQUcsVUFGZjtBQUlBLElBQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQWI7QUFBQSxJQUNJQyxTQUFTLEdBQUdGLFFBQVEsQ0FBQ0csY0FBVCxDQUF3QixTQUF4QixDQURoQjtBQUFBLElBRUlDLFFBQVEsR0FBR0MsWUFBWSxDQUFDQyxPQUFiLENBQXFCUixRQUFyQixDQUZmOztBQUlBLElBQU1TLEtBQUssR0FBRyxTQUFSQSxLQUFRLENBQUNILFFBQUQsRUFBYztBQUN4QixNQUFNSSxNQUFNLEdBQUdDLEVBQUUsQ0FBQyxHQUFELENBQWpCLENBRHdCLENBQ0E7O0FBQ3hCRCxFQUFBQSxNQUFNLENBQUNFLElBQVAsQ0FBWSxhQUFaLEVBQTBCO0FBQUNOLElBQUFBLFFBQVEsRUFBUkE7QUFBRCxHQUExQjtBQUNILENBSEQ7O0FBS0EsSUFBR0EsUUFBUSxLQUFLLElBQWhCLEVBQXFCO0FBQ2pCTCxFQUFBQSxJQUFJLENBQUNZLFNBQUwsR0FBaUJmLFVBQWpCO0FBQ0gsQ0FGRCxNQUdJO0FBQ0FHLEVBQUFBLElBQUksQ0FBQ1ksU0FBTCxHQUFpQmQsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFFRCxJQUFNUSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUMxQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHYixTQUFTLENBQUNELGFBQVYsQ0FBd0IsT0FBeEIsQ0FBZDtBQUYwQixNQUduQmUsS0FIbUIsR0FHVkQsS0FIVSxDQUduQkMsS0FIbUI7QUFJMUJYLEVBQUFBLFlBQVksQ0FBQ1ksT0FBYixDQUFxQm5CLFFBQXJCLEVBQThCa0IsS0FBOUI7QUFDQWpCLEVBQUFBLElBQUksQ0FBQ1ksU0FBTCxHQUFpQmQsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDUyxLQUFELENBQUw7QUFDSCxDQVBEOztBQVNBLElBQUlkLFNBQUosRUFBZTtBQUNYQSxFQUFBQSxTQUFTLENBQUNnQixnQkFBVixDQUEyQixRQUEzQixFQUFxQ04sZ0JBQXJDO0FBQ0giLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBMT0dHRURfT1VUID0gXCJsb2dnZWRPdXRcIixcclxuICAgIExPR0dFRF9JTiA9IFwibG9nZ2VkSW5cIixcclxuICAgIE5JQ0tOQU1FID0gXCJuaWNrbmFtZVwiO1xyXG5cclxuY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpLFxyXG4gICAgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc0xvZ2luXCIpLFxyXG4gICAgbmlja25hbWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShOSUNLTkFNRSk7XHJcblxyXG5jb25zdCBsb2dpbiA9IChuaWNrbmFtZSkgPT4geyAgICBcclxuICAgIGNvbnN0IHNvY2tldCA9IGlvKFwiL1wiKTsgLy8g7Jew6rKwXHJcbiAgICBzb2NrZXQuZW1pdChcInNldE5pY2tuYW1lXCIse25pY2tuYW1lfSk7XHJcbn1cclxuXHJcbmlmKG5pY2tuYW1lID09PSBudWxsKXtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX09VVDtcclxufVxyXG5lbHNle1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dpbihuaWNrbmFtZSk7XHJcbn1cclxuXHJcbmNvbnN0IGhhbmRsZUZvcm1TdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gbG9naW5Gb3JtLnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKTtcclxuICAgIGNvbnN0IHt2YWx1ZX0gPSBpbnB1dDtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKE5JQ0tOQU1FLHZhbHVlKTtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgbG9naW4odmFsdWUpO1xyXG59O1xyXG4gIFxyXG5pZiAobG9naW5Gb3JtKSB7XHJcbiAgICBsb2dpbkZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVGb3JtU3VibWl0KTtcclxufSJdfQ==
},{}]},{},[1])
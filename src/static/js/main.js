(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notification");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfNTQwNDVkYTAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uXCI7XHJcbiJdfQ==
},{"./login":2,"./notification":3,"./sockets":4}],2:[function(require,module,exports){
"use strict";

var _require = require("./sockets"),
    initSockets = _require.initSockets;

var LOGGED_OUT = "loggedOut",
    LOGGED_IN = "loggedIn",
    NICKNAME = "nickname";
var body = document.querySelector("body"),
    loginForm = document.getElementById("jsLogin"),
    nickname = localStorage.getItem(NICKNAME);

var login = function login(nickname) {
  var socket = io("/"); // socket 변수 전역 변수화

  socket.emit(window.events.setNickname, {
    nickname: nickname
  }); // 전역 변수 setNickname 

  initSockets(socket);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0U29ja2V0cyIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztlQUF3QkEsT0FBTyxDQUFDLFdBQUQsQztJQUF2QkMsVyxZQUFBQSxXOztBQUVSLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUFBLElBQ0lDLFNBQVMsR0FBRyxVQURoQjtBQUFBLElBRUlDLFFBQVEsR0FBRyxVQUZmO0FBSUEsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUFBLElBQ0lDLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBRGhCO0FBQUEsSUFFSUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLFFBQXJCLENBRmY7O0FBSUEsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakIsQ0FEd0IsQ0FDQTs7QUFDeEJELEVBQUFBLE1BQU0sQ0FBQ0UsSUFBUCxDQUFZQyxNQUFNLENBQUNDLE1BQVAsQ0FBY0MsV0FBMUIsRUFBc0M7QUFBQ1QsSUFBQUEsUUFBUSxFQUFSQTtBQUFELEdBQXRDLEVBRndCLENBRTJCOztBQUNuRFQsRUFBQUEsV0FBVyxDQUFDYSxNQUFELENBQVg7QUFDSCxDQUpEOztBQU1BLElBQUdKLFFBQVEsS0FBSyxJQUFoQixFQUFxQjtBQUNqQkwsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCbEIsVUFBakI7QUFDSCxDQUZELE1BR0k7QUFDQUcsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCakIsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUMxQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHaEIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGMEIsTUFHbkJrQixLQUhtQixHQUdWRCxLQUhVLENBR25CQyxLQUhtQjtBQUkxQmQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCdEIsUUFBckIsRUFBOEJxQixLQUE5QjtBQUNBcEIsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCakIsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVBEOztBQVNBLElBQUlqQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDbUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0U29ja2V0cyB9ID0gcmVxdWlyZShcIi4vc29ja2V0c1wiKTtcclxuXHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiLFxyXG4gICAgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiLFxyXG4gICAgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXHJcbiAgICBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIiksXHJcbiAgICBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcclxuXHJcbmNvbnN0IGxvZ2luID0gKG5pY2tuYW1lKSA9PiB7ICAgIFxyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyAvLyBzb2NrZXQg67OA7IiYIOyghOyXrSDrs4DsiJjtmZRcclxuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUse25pY2tuYW1lfSk7IC8vIOyghOyXrSDrs4DsiJggc2V0Tmlja25hbWUgXHJcbiAgICBpbml0U29ja2V0cyhzb2NrZXQpO1xyXG59XHJcblxyXG5pZihuaWNrbmFtZSA9PT0gbnVsbCl7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9PVVQ7XHJcbn1cclxuZWxzZXtcclxuICAgIGJvZHkuY2xhc3NOYW1lID0gTE9HR0VEX0lOO1xyXG4gICAgbG9naW4obmlja25hbWUpO1xyXG59XHJcblxyXG5jb25zdCBoYW5kbGVGb3JtU3VibWl0ID0gZSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBjb25zdCBpbnB1dCA9IGxvZ2luRm9ybS5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjb25zdCB7dmFsdWV9ID0gaW5wdXQ7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShOSUNLTkFNRSx2YWx1ZSk7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ2luKHZhbHVlKTtcclxufTtcclxuICBcclxuaWYgKGxvZ2luRm9ybSkge1xyXG4gICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRm9ybVN1Ym1pdCk7XHJcbn0iXX0=
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleNewUser = void 0;
var notifications = document.getElementById("jsNotifications");

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  console.log(nickname, "just joined");
};

exports.handleNewUser = handleNewUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJub3RpZmljYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQU1BLGFBQWEsR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGlCQUF4QixDQUF0Qjs7QUFFTyxJQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzNDQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsUUFBWixFQUFxQixhQUFyQjtBQUNILENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XHJcblxyXG5leHBvcnQgY29uc3QgaGFuZGxlTmV3VXNlciA9ICh7IG5pY2tuYW1lIH0pID0+IHtcclxuICAgIGNvbnNvbGUubG9nKG5pY2tuYW1lLFwianVzdCBqb2luZWRcIik7XHJcbn1cclxuIl19
},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initSockets = exports.updateSockets = exports.getSockets = void 0;

var _notification = require("./notification");

var socket = null;
/* subscrition 관리 */

var getSockets = function getSockets() {
  return window.socket;
};

exports.getSockets = getSockets;

var updateSockets = function updateSockets(aSocket) {
  return socket = aSocket;
};

exports.updateSockets = updateSockets;

var initSockets = function initSockets(aSocket) {
  var _window = window,
      events = _window.events;
  updateSockets(aSocket);
  aSocket.on(events.newUser, _notification.handleNewUser);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0cyIsIndpbmRvdyIsInVwZGF0ZVNvY2tldHMiLCJhU29ja2V0IiwiaW5pdFNvY2tldHMiLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7QUFFQTs7QUFDTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1DLE1BQU0sQ0FBQ0YsTUFBYjtBQUFBLENBQW5COzs7O0FBRUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFEO0FBQUEsU0FBYUosTUFBTSxHQUFHSSxPQUF0QjtBQUFBLENBQXRCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ2pCRixNQURpQjtBQUFBLE1BQzVCSSxNQUQ0QixXQUM1QkEsTUFENEI7QUFFcENILEVBQUFBLGFBQWEsQ0FBQ0MsT0FBRCxDQUFiO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0csRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTBCQywyQkFBMUI7QUFDSCxDQUpNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlTmV3VXNlciB9IGZyb20gJy4vbm90aWZpY2F0aW9uJztcclxuXHJcbmxldCBzb2NrZXQgPSBudWxsO1xyXG5cclxuLyogc3Vic2NyaXRpb24g6rSA66asICovXHJcbmV4cG9ydCBjb25zdCBnZXRTb2NrZXRzID0gKCkgPT4gd2luZG93LnNvY2tldDtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVTb2NrZXRzID0gKGFTb2NrZXQpID0+IHNvY2tldCA9IGFTb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFNvY2tldHMgPSAoYVNvY2tldCkgPT4ge1xyXG4gICAgY29uc3QgeyBldmVudHMgfSA9IHdpbmRvdztcclxuICAgIHVwZGF0ZVNvY2tldHMoYVNvY2tldCk7XHJcbiAgICBhU29ja2V0Lm9uKGV2ZW50cy5uZXdVc2VyLGhhbmRsZU5ld1VzZXIpO1xyXG59Il19
},{"./notification":3}]},{},[1])
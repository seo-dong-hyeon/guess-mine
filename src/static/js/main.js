(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

require("./sockets");

require("./login");

require("./notification");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZha2VfOTRkOTViYjkuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7QUFDQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIi4vc29ja2V0c1wiO1xyXG5pbXBvcnQgXCIuL2xvZ2luXCI7XHJcbmltcG9ydCBcIi4vbm90aWZpY2F0aW9uXCI7XHJcbiJdfQ==
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
  var socket = io("/");
  socket.emit(window.events.setNickname, {
    nickname: nickname
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJpbml0U29ja2V0cyIsIkxPR0dFRF9PVVQiLCJMT0dHRURfSU4iLCJOSUNLTkFNRSIsImJvZHkiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJsb2dpbkZvcm0iLCJnZXRFbGVtZW50QnlJZCIsIm5pY2tuYW1lIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImxvZ2luIiwic29ja2V0IiwiaW8iLCJlbWl0Iiwid2luZG93IiwiZXZlbnRzIiwic2V0Tmlja25hbWUiLCJjbGFzc05hbWUiLCJoYW5kbGVGb3JtU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiaW5wdXQiLCJ2YWx1ZSIsInNldEl0ZW0iLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiOztlQUF3QkEsT0FBTyxDQUFDLFdBQUQsQztJQUF2QkMsVyxZQUFBQSxXOztBQUVSLElBQU1DLFVBQVUsR0FBRyxXQUFuQjtBQUFBLElBQ0lDLFNBQVMsR0FBRyxVQURoQjtBQUFBLElBRUlDLFFBQVEsR0FBRyxVQUZmO0FBSUEsSUFBTUMsSUFBSSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBYjtBQUFBLElBQ0lDLFNBQVMsR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLFNBQXhCLENBRGhCO0FBQUEsSUFFSUMsUUFBUSxHQUFHQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUJSLFFBQXJCLENBRmY7O0FBSUEsSUFBTVMsS0FBSyxHQUFHLFNBQVJBLEtBQVEsQ0FBQ0gsUUFBRCxFQUFjO0FBQ3hCLE1BQU1JLE1BQU0sR0FBR0MsRUFBRSxDQUFDLEdBQUQsQ0FBakI7QUFDQUQsRUFBQUEsTUFBTSxDQUFDRSxJQUFQLENBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxXQUExQixFQUFzQztBQUFDVCxJQUFBQSxRQUFRLEVBQVJBO0FBQUQsR0FBdEM7QUFDQVQsRUFBQUEsV0FBVyxDQUFDYSxNQUFELENBQVg7QUFDSCxDQUpEOztBQU1BLElBQUdKLFFBQVEsS0FBSyxJQUFoQixFQUFxQjtBQUNqQkwsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCbEIsVUFBakI7QUFDSCxDQUZELE1BR0k7QUFDQUcsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCakIsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDSCxRQUFELENBQUw7QUFDSDs7QUFFRCxJQUFNVyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLENBQUFDLENBQUMsRUFBSTtBQUMxQkEsRUFBQUEsQ0FBQyxDQUFDQyxjQUFGO0FBQ0EsTUFBTUMsS0FBSyxHQUFHaEIsU0FBUyxDQUFDRCxhQUFWLENBQXdCLE9BQXhCLENBQWQ7QUFGMEIsTUFHbkJrQixLQUhtQixHQUdWRCxLQUhVLENBR25CQyxLQUhtQjtBQUkxQmQsRUFBQUEsWUFBWSxDQUFDZSxPQUFiLENBQXFCdEIsUUFBckIsRUFBOEJxQixLQUE5QjtBQUNBcEIsRUFBQUEsSUFBSSxDQUFDZSxTQUFMLEdBQWlCakIsU0FBakI7QUFDQVUsRUFBQUEsS0FBSyxDQUFDWSxLQUFELENBQUw7QUFDSCxDQVBEOztBQVNBLElBQUlqQixTQUFKLEVBQWU7QUFDWEEsRUFBQUEsU0FBUyxDQUFDbUIsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUNOLGdCQUFyQztBQUNIIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBpbml0U29ja2V0cyB9ID0gcmVxdWlyZShcIi4vc29ja2V0c1wiKTtcclxuXHJcbmNvbnN0IExPR0dFRF9PVVQgPSBcImxvZ2dlZE91dFwiLFxyXG4gICAgTE9HR0VEX0lOID0gXCJsb2dnZWRJblwiLFxyXG4gICAgTklDS05BTUUgPSBcIm5pY2tuYW1lXCI7XHJcblxyXG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJvZHlcIiksXHJcbiAgICBsb2dpbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzTG9naW5cIiksXHJcbiAgICBuaWNrbmFtZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKE5JQ0tOQU1FKTtcclxuXHJcbmNvbnN0IGxvZ2luID0gKG5pY2tuYW1lKSA9PiB7ICAgIFxyXG4gICAgY29uc3Qgc29ja2V0ID0gaW8oXCIvXCIpOyBcclxuICAgIHNvY2tldC5lbWl0KHdpbmRvdy5ldmVudHMuc2V0Tmlja25hbWUse25pY2tuYW1lfSk7IFxyXG4gICAgaW5pdFNvY2tldHMoc29ja2V0KTtcclxufVxyXG5cclxuaWYobmlja25hbWUgPT09IG51bGwpe1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfT1VUO1xyXG59XHJcbmVsc2V7XHJcbiAgICBib2R5LmNsYXNzTmFtZSA9IExPR0dFRF9JTjtcclxuICAgIGxvZ2luKG5pY2tuYW1lKTtcclxufVxyXG5cclxuY29uc3QgaGFuZGxlRm9ybVN1Ym1pdCA9IGUgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBsb2dpbkZvcm0ucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY29uc3Qge3ZhbHVlfSA9IGlucHV0O1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oTklDS05BTUUsdmFsdWUpO1xyXG4gICAgYm9keS5jbGFzc05hbWUgPSBMT0dHRURfSU47XHJcbiAgICBsb2dpbih2YWx1ZSk7XHJcbn07XHJcbiAgXHJcbmlmIChsb2dpbkZvcm0pIHtcclxuICAgIGxvZ2luRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUZvcm1TdWJtaXQpO1xyXG59Il19
},{"./sockets":4}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleDisconnected = exports.handleNewUser = void 0;
var notifications = document.getElementById("jsNotifications");

var fireNotification = function fireNotification(text, color) {
  var notification = document.createElement("div");
  notification.innerText = text;
  notification.style.backgroundColor = color;
  notifications.appendChild(notification);
};

var handleNewUser = function handleNewUser(_ref) {
  var nickname = _ref.nickname;
  return fireNotification("".concat(nickname, " just joined"), "rgb(0, 122, 255)");
};

exports.handleNewUser = handleNewUser;

var handleDisconnected = function handleDisconnected(_ref2) {
  var nickname = _ref2.nickname;
  return fireNotification("".concat(nickname, " just left!"), "rgb(255, 149, 0)");
};

exports.handleDisconnected = handleDisconnected;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5qcyJdLCJuYW1lcyI6WyJub3RpZmljYXRpb25zIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImZpcmVOb3RpZmljYXRpb24iLCJ0ZXh0IiwiY29sb3IiLCJub3RpZmljYXRpb24iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0Iiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJhcHBlbmRDaGlsZCIsImhhbmRsZU5ld1VzZXIiLCJuaWNrbmFtZSIsImhhbmRsZURpc2Nvbm5lY3RlZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBTUEsYUFBYSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsaUJBQXhCLENBQXRCOztBQUVBLElBQU1DLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0MsSUFBRCxFQUFPQyxLQUFQLEVBQWlCO0FBQ3RDLE1BQU1DLFlBQVksR0FBR0wsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQXJCO0FBQ0FELEVBQUFBLFlBQVksQ0FBQ0UsU0FBYixHQUF5QkosSUFBekI7QUFDQUUsRUFBQUEsWUFBWSxDQUFDRyxLQUFiLENBQW1CQyxlQUFuQixHQUFxQ0wsS0FBckM7QUFFQUwsRUFBQUEsYUFBYSxDQUFDVyxXQUFkLENBQTBCTCxZQUExQjtBQUVILENBUEQ7O0FBU08sSUFBTU0sYUFBYSxHQUFHLFNBQWhCQSxhQUFnQjtBQUFBLE1BQUdDLFFBQUgsUUFBR0EsUUFBSDtBQUFBLFNBQ3pCVixnQkFBZ0IsV0FBSVUsUUFBSixtQkFBMkIsa0JBQTNCLENBRFM7QUFBQSxDQUF0Qjs7OztBQUlBLElBQU1DLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUI7QUFBQSxNQUFHRCxRQUFILFNBQUdBLFFBQUg7QUFBQSxTQUM5QlYsZ0JBQWdCLFdBQUlVLFFBQUosa0JBQTBCLGtCQUExQixDQURjO0FBQUEsQ0FBM0IiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBub3RpZmljYXRpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJqc05vdGlmaWNhdGlvbnNcIik7XHJcblxyXG5jb25zdCBmaXJlTm90aWZpY2F0aW9uID0gKHRleHQsIGNvbG9yKSA9PiB7XHJcbiAgICBjb25zdCBub3RpZmljYXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbm90aWZpY2F0aW9uLmlubmVyVGV4dCA9IHRleHQ7XHJcbiAgICBub3RpZmljYXRpb24uc3R5bGUuYmFja2dyb3VuZENvbG9yID0gY29sb3I7XHJcblxyXG4gICAgbm90aWZpY2F0aW9ucy5hcHBlbmRDaGlsZChub3RpZmljYXRpb24pO1xyXG5cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZU5ld1VzZXIgPSAoeyBuaWNrbmFtZSB9KSA9PiBcclxuICAgIGZpcmVOb3RpZmljYXRpb24oYCR7bmlja25hbWV9IGp1c3Qgam9pbmVkYCxcInJnYigwLCAxMjIsIDI1NSlcIik7XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGhhbmRsZURpc2Nvbm5lY3RlZCA9ICh7IG5pY2tuYW1lIH0pID0+IFxyXG4gICAgZmlyZU5vdGlmaWNhdGlvbihgJHtuaWNrbmFtZX0ganVzdCBsZWZ0IWAsXCJyZ2IoMjU1LCAxNDksIDApXCIpO1xyXG5cclxuIl19
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
  aSocket.on(events.disconnected, _notification.handleDisconnected);
};

exports.initSockets = initSockets;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvY2tldHMuanMiXSwibmFtZXMiOlsic29ja2V0IiwiZ2V0U29ja2V0cyIsIndpbmRvdyIsInVwZGF0ZVNvY2tldHMiLCJhU29ja2V0IiwiaW5pdFNvY2tldHMiLCJldmVudHMiLCJvbiIsIm5ld1VzZXIiLCJoYW5kbGVOZXdVc2VyIiwiZGlzY29ubmVjdGVkIiwiaGFuZGxlRGlzY29ubmVjdGVkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBRUEsSUFBSUEsTUFBTSxHQUFHLElBQWI7QUFFQTs7QUFDTyxJQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFNBQU1DLE1BQU0sQ0FBQ0YsTUFBYjtBQUFBLENBQW5COzs7O0FBRUEsSUFBTUcsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxPQUFEO0FBQUEsU0FBYUosTUFBTSxHQUFHSSxPQUF0QjtBQUFBLENBQXRCOzs7O0FBRUEsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsT0FBRCxFQUFhO0FBQUEsZ0JBQ2pCRixNQURpQjtBQUFBLE1BQzVCSSxNQUQ0QixXQUM1QkEsTUFENEI7QUFFcENILEVBQUFBLGFBQWEsQ0FBQ0MsT0FBRCxDQUFiO0FBQ0FBLEVBQUFBLE9BQU8sQ0FBQ0csRUFBUixDQUFXRCxNQUFNLENBQUNFLE9BQWxCLEVBQTBCQywyQkFBMUI7QUFDQUwsRUFBQUEsT0FBTyxDQUFDRyxFQUFSLENBQVdELE1BQU0sQ0FBQ0ksWUFBbEIsRUFBK0JDLGdDQUEvQjtBQUNILENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVOZXdVc2VyLCBoYW5kbGVEaXNjb25uZWN0ZWQgfSBmcm9tICcuL25vdGlmaWNhdGlvbic7XHJcblxyXG5sZXQgc29ja2V0ID0gbnVsbDtcclxuXHJcbi8qIHN1YnNjcml0aW9uIOq0gOumrCAqL1xyXG5leHBvcnQgY29uc3QgZ2V0U29ja2V0cyA9ICgpID0+IHdpbmRvdy5zb2NrZXQ7XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlU29ja2V0cyA9IChhU29ja2V0KSA9PiBzb2NrZXQgPSBhU29ja2V0O1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXRTb2NrZXRzID0gKGFTb2NrZXQpID0+IHtcclxuICAgIGNvbnN0IHsgZXZlbnRzIH0gPSB3aW5kb3c7XHJcbiAgICB1cGRhdGVTb2NrZXRzKGFTb2NrZXQpO1xyXG4gICAgYVNvY2tldC5vbihldmVudHMubmV3VXNlcixoYW5kbGVOZXdVc2VyKTtcclxuICAgIGFTb2NrZXQub24oZXZlbnRzLmRpc2Nvbm5lY3RlZCxoYW5kbGVEaXNjb25uZWN0ZWQpO1xyXG59Il19
},{"./notification":3}]},{},[1])
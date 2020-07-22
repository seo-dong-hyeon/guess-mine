import { handleNewUser, handleDisconnected } from './notifications';
import { handleNewMsg } from './chat';

let socket = null;

/* subscrition 관리 */
export const getSocket = () => socket;

export const updateSockets = (aSocket) => socket = aSocket;

export const initSockets = (aSocket) => {
    const { events } = window;
    updateSockets(aSocket);
    aSocket.on(events.newUser,handleNewUser);
    aSocket.on(events.disconnected,handleDisconnected);
    aSocket.on(events.newMsg,handleNewMsg);
}
import { handleNewUser } from './notification';

let socket = null;

/* subscrition 관리 */
export const getSockets = () => window.socket;

export const updateSockets = (aSocket) => socket = aSocket;

export const initSockets = (aSocket) => {
    const { events } = window;
    updateSockets(aSocket);
    aSocket.on(events.newUser,handleNewUser);
}
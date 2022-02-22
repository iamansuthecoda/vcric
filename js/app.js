import { io } from 'https://cdn.jsdelivr.net/npm/socket.io@latest/client-dist/socket.io.esm.min.js'

const socket = io("http://localhost:3500")

console.log(socket)
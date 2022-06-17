const express = require('express');
const { Server: HttpServer } = require('http');
const { Server: IOServer } = require('socket.io');

const PORT = 3000;
const app = express();
app.use(express.static('public'));
const httpServer = new HttpServer(app);
const io = new IOServer(httpServer);

const messages = [
	{ author: 'L-gante', text: '¡Hola perro!' },
	{ author: 'Pablito Lescano', text: 'Hola perrito malvado!' },
]

io.on('connection', socket => {
	console.log('Un cliente se ha conectado');
	io.sockets.emit('messages', messages);
	socket.emit('messages', messages);
	socket.on('new-message', data => {
		messages.push(data);
		io.sockets.emit('messages', messages);
	})
});

httpServer.listen(PORT, () => {
	console.log(`Server running on PORT ${PORT}`);
});
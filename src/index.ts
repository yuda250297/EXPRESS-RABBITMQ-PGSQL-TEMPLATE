import express from 'express';
import routes from './routes';
import { sequelize } from './models';
import WebSocket from 'ws';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use('/api', routes);

/**
 * MAIN Application
 */
async function boot() {
    try {
        await sequelize.sync();
        console.log('Database connected.');
        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Unable to start server:', error);
    }
}

/**
 * To Open Web Socket
 */
function openws () {
    const wss = new WebSocket.Server({ port: Number(process.env.PORT) || 8080 });
    
    wss.on('connection', ws => {
        console.log('New client connected');
        ws.on('message', ( message: string ) => {
            console.log(`Received message => ${message}`);
        });
        ws.send('Welcome to the WebSocket server');
    });
    
    console.log('WebSocket server running on ws://localhost:8080');
}

boot();
openws();

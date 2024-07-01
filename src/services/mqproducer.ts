import amqp from 'amqplib';

async function sendMessage(queue: string, message: string) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Message sent: ${message}`);
    
    setTimeout(() => { connection.close(); }, 500);
}

sendMessage('orders', 'New Order Placed');

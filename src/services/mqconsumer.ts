import amqp from 'amqplib';

async function consumeMessages(queue: string) {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: true });
    console.log(`Waiting for messages in ${queue}`);

    channel.consume(queue, msg => {
        if (msg !== null) {
            console.log(`Received message: ${msg.content.toString()}`);
            channel.ack(msg);
        }
    });
}

consumeMessages('orders');

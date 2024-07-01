import { spawn } from 'child_process';

// Function to run a command
const runCommand = (command: string, args: string[]) => {
    const process = spawn(command, args, { stdio: 'inherit' });
    process.on('close', (code) => {
        if (code !== 0) {
            console.error(`Process ${command} exited with code ${code}`);
        }
    });
};

// Run Express server
runCommand('ts-node', ['src/index.ts']);

// Run RabbitMQ producer
runCommand('ts-node', ['src/services/producer.ts']);

// Run RabbitMQ consumer
runCommand('ts-node', ['src/services/consumer.ts']);

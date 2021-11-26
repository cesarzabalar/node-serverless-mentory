import config from './config';
import Server from './server';

// const main = async () => {
// 	const server = new Server(config);
// 	console.log('test1');
// 	await server.run();
// 	console.log('test2');
// };

// main();

new Server(config).run();

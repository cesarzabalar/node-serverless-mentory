import express, { Application, Request, Response } from 'express';
const app: Application = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
	//if (4 === 4) res.send('same');
	res.send('HomePage');
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`server is listening on ${port}`);
});

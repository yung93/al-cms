import { createServer } from './config/express';
import http from 'http';

const port = process.env.PORT || '3000';

async function startServer() {
    const app = createServer();
    http.createServer(app).listen({ port }, () => {
        console.log(`Server ready at port: ${port}`,)
    });
}

startServer();

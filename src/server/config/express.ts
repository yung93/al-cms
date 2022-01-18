import express from 'express';
import {execute} from "../controller";

const createServer = (): express.Application => {
    const app = express();

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    app.disable('x-powered-by');

    app.get('/health', (_req, res) => {
        res.send('UP');
    });

    app.post('/execute', async (req, res) => {
        const {command} = req.body;
        let result = '';
        try {
            result = await execute(command);
        } catch (e: any) {
            console.error(e);
            return res.status(400).json({
                success:false,
                error: e.message,
            });
        }
        return res.status(200).json({
            success:true,
            result,
        });
    });

    return app;
};

export { createServer };

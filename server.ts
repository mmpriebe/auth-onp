import Express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import router from './routes';

dotenv.config();


const server = Express();

server.use(cors());
server.use(Express.urlencoded({extended: true}))
server.use(router);

server.listen(process.env.PORT, () => {
    console.log(`Server running on http://localhost:${process.env.PORT}`)
});
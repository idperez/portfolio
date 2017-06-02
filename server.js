import config from './config';
import express from 'express';

const server = express();

server.use(express.static('public'));

server.set('view engine', 'ejs');

server.get("/", (req, res) => {
    res.send("hi");
});

server.listen(config.port, () => {
    console.log(`listening on port ${config.port}`);
});

const express = require('express');
const chalk = require('chalk');
const Blockchain = require('./blockchain');


const app = express();

const blockchain = new Blockchain();

app.get('/api/blocks', (req, res) => {
    res.json(blockchain.chain);
});

const PORT = 3000;

app.listen(PORT, () => console.log(chalk.greenBright(`listening at localhost:${PORT}`)));
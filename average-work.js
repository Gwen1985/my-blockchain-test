const chalk = require('chalk');

const Blockchain = require('./blockchain');

const blockchain = new Blockchain();

blockchain.addBlock({data: 'initial'});
console.log(`first block`, blockchain.chain[blockchain.chain.length - 1]);

blockchain.addBlock({data: 'initial'});
console.log(`first block`, blockchain.chain[blockchain.chain.length - 1]);

blockchain.addBlock({data: 'initial'});
console.log(`first block`, blockchain.chain[blockchain.chain.length - 1]);

blockchain.addBlock({data: 'initial'});
console.log(`first block`, blockchain.chain[blockchain.chain.length - 1]);

blockchain.addBlock({data: 'initial'});
console.log(`first block`, blockchain.chain[blockchain.chain.length - 1]);



// let prevTimestamp, nextTimestamp, nextBlock, timeDiff, average;
//
// const times = [];
//
// for (let i = 0; i < 1000; i++) {
//     prevTimestamp = blockchain.chain[blockchain.chain.length - 1].timestamp;
//
//     blockchain.addBlock({data: `block ${i}`});
//     nextBlock = blockchain.chain[blockchain.chain.length - 1];
//
//     nextTimestamp = nextBlock.timestamp;
//     timeDiff = nextTimestamp - prevTimestamp;
//     times.push(timeDiff);
//
//     average = times.reduce((total, num) => (total + num)) / times.length;
//
//     console.log(chalk.bgGray.green(` Time to mine block: `) + chalk.greenBright(` ${timeDiff}ms. `) + chalk.bgGray.red(`  Difficulty: `) + chalk.redBright(` ${nextBlock.difficulty}. `) + chalk.bgGray.cyan(`  Average time: `) + chalk.cyanBright(` ${average} `));
// }
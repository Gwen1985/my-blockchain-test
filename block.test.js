const Block = require("./block");
const cryptoHash = require('./crypto-hash');
const {GENESIS_DATA} = require("./config");

// testing the block
describe('Block', () => {
    const timestamp = 'a date';
    const lastHash = 'foo-lastHash';
    const hash = 'foo-hash';
    const data = ['blockchain', 'data'];
    const block = new Block({timestamp, lastHash, hash, data});

    it('should have a timestamp, a lasthash, a hash and data property', () => {
        expect(block.timestamp).toEqual(timestamp);
        expect(block.lastHash).toEqual(lastHash);
        expect(block.hash).toEqual(hash);
        expect(block.data).toEqual(data);
    });


    describe('genesis', () => {
        const genesisBlock = Block.genesis();

        it('should return a Block instance',  () => {
            expect(genesisBlock instanceof Block).toBe(true);
        });

        it('should return the genesis data', () => {
            expect(genesisBlock).toEqual(GENESIS_DATA)
        });
    });

    describe('mineBlock()', () => {
        const lastBlock = Block.genesis();
        const data = 'mined data';
        const minedBlock = Block.mineBlock({lastBlock, data});

        it('should return a Block instance',  () => {
            expect(minedBlock instanceof Block).toBe(true);
        });

        it('sets the `lastHash` to be the `hash` of the last block', () => {
            expect(minedBlock.lastHash).toEqual(lastBlock.hash);
        });

        it('sets the `data`', () => {
            expect(minedBlock.data).toEqual(data);
        })

        it('sets the `timestamp`', () => {
            expect(minedBlock.timestamp).not.toEqual(undefined);
        });

        it('should create a SHA-256 `hash` based on the poper inputs', () => {
            expect(minedBlock.hash).toEqual(cryptoHash(minedBlock.timestamp, lastBlock.hash, data));
        });
    });

});
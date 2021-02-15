const Block = require("./block");
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

});
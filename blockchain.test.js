const Blockchain = require('./blockchain');

const Block = require('./block');


describe('Blockchain', () => {
    let blockchain, newChain, originalChain;

    beforeEach(() => {
        blockchain = new Blockchain();
        newChain = new Blockchain();

        originalChain = blockchain.chain;
    });


    it('should contain a chain array instance', () => {
        expect(blockchain.chain instanceof Array).toBe(true);
    });

    it('should start with the genesis block', () => {
        expect(blockchain.chain[0]).toEqual(Block.genesis());
    });

    it('should add a new block to the chain', () => {
        const newData = 'foo bar';
        blockchain.addBlock({data: newData});

        expect(blockchain.chain[blockchain.chain.length - 1].data).toEqual(newData);
    });

    describe('isValidChain()', () => {
        describe('When the chain does not start with the genesis blockk', () => {
            it('should retrun false', () => {
                blockchain.chain[0] = {data: 'fake-genesis'};

                expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
            });
        });

        describe('When the chain starts with the genesis block and has multiple blocks', () => {

            beforeEach(() => {
                blockchain.addBlock({data: 'Thailand'});
                blockchain.addBlock({data: 'Peru'});
                blockchain.addBlock({data: 'Mexico'});
            });

            describe('and lastHash reference has changed', () => {
                it('should return false', () => {

                    blockchain.chain[2].lastHash = 'broken-lastHash';

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
                });
            });

            describe('and the chain contains a block with an invalid field', () => {
                it('should return false', () => {

                    blockchain.chain[2].data = 'corrupted-data';

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(false);
                });
            });

            describe('and the chain does not contain any invalid blocks', () => {
                it('should return true', () => {

                    expect(Blockchain.isValidChain(blockchain.chain)).toBe(true);

                });
            });
        });
    });

    describe('replaceChain()', () => {
        describe('When the new chain is not longer', () => {
            it('should not replace the chain', () => {
                newChain.chain[0] = {new: 'chain'};

                blockchain.replaceChain(newChain.chain);

                expect(blockchain.chain).toEqual(originalChain);
            });
        });

        describe('When the new chain is longer', () => {
            beforeEach( () => {
                newChain.addBlock({data: 'Thailand'});
                newChain.addBlock({data: 'Peru'});
                newChain.addBlock({data: 'Mexico'});
            })
            describe('and the chain is invalid', () => {
                it('should not replace the chain', () => {
                    newChain.chain[2].hash = 'some-fake-hash';

                    blockchain.replaceChain(newChain.chain);

                    expect(blockchain.chain).toEqual(originalChain)
                });
            });


            describe('When the new chain is valid', () => {
                it('should replace the chain', () => {
                    blockchain.replaceChain(newChain.chain);

                    expect(blockchain.chain).toEqual(newChain.chain)
                });
            });
        });
    });
});
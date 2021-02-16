// This file serves as a collection file for hardcoded and global values.

const INITIAL_DIFFICULTY = 3;
// scream case syntax = ALL_CAPITAL_LETTERS = hardcoded global value
const GENESIS_DATA = {

    timestamp: 1,
    lastHash: '-----',
    hash: 'Genesis_hash',
    difficulty: INITIAL_DIFFICULTY,
    nonce: 0,
    data: []
};

module.exports = {GENESIS_DATA};
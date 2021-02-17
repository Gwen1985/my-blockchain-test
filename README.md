# Full-stack blockchain

### With a backend + frontend with Node.js, Jest, Express, React, Heroku, & more!

Source: Udemy -> Build a Blockchain & Cryptocurrency | Full-Stack Edition

- running the tests: _npm run test_
- run the average-work.js file: _node average-work.js_
- run the server : _npm run start_ or _nodemon_ for continues watching

### What have i achieved?

#### Part 1: Blocks:

- Set up the overall blockchain application.
- Created the basic building block of the blockchain - with blocks themselves!
- Started a test-driven development approach to the project.
- Built the genesis block - to get the blockchain going.
- Added functionality to mine a block - create a new block for the blockchain.
- Developed the important sha-256 hash function.
- Applied the hash to mine a block.


#### Part 2: The chain:

- Created the fundamental blockchain class.
- Developed functionality to validate the blockchain, to allow for chain replacement.
- Implemented chain replacement.
- Investigated stubbing console output in tests to keep the output clean.


#### Part 3: Proof of Work:

- Implemented the proof of work system by adding a difficulty and nonce value to each block.
- Adjusted the difficulty for a block to ensure that blocks are mined at a rate which approaches a set mining rate for
  the system.
- Investigated the proof of work system by writing a script which checked how will the dynamic difficulty adjusted the
  system to approach the mine rate.
- Switched the hexadecimal character-based difficulty criteria to a more fine-grained binary bit-based difficulty
  criteria.
- Prevented a potential difficulty jump attack by adding extra validation for the blockchain.


#### Part 4: API and Network:

- Set up an express API to allow for interaction to the backend through HTTP requests.
- Create a GET request to read the blockchain.
- Add a POST request to write new blocks to the blockchain ( use postman ).

## **TODO:**

#### Part 4: API and Network:

- Implement a real-time messaging network through Redis or PubNub.
- Add the ability to broadcast chains.
- Start peers through alternate ports, and broadcast chains when blocks are mined through the api.
- Synchronize chains when new peers connect to the network.
- Optimize the implementation to avoid redundant interaction.

#### Part 5: Wallets, Keys, and Transactions:

#### Part 6: Transaction Pool:

#### Part 7: Mine Transactions:

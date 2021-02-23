const PubNub = require('pubnub');

const credentials = {
    publishKey: process.env.pub,
    subscribeKey: process.env.sub,
    SecretKey: process.env.sec
};


const CHANNELS = {
    TEST: 'TEST',
}


class PubSub {
    constructor() {
        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({channels: Object.values(CHANNELS)});

        this.pubnub.addListener(this.listener());
    }

    listener() {
        return {
            message: messageObject => {
                const {channel, message} = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
            }
        };
    }

    publish({channel, message}) {
        this.pubnub.publish({channel, message});
    }
}

// TESTING DEMO
// const testPubSub = new PubSub();
// testPubSub.publish({channel: CHANNELS.TEST, message: 'Welcome to PubNub, Venom...'});

module.exports = PubSub;
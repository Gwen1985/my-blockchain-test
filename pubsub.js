const PubNub = require('pubnub');

const credentials = {
    publishKey: "pub-c-4c6b752f-2cba-4554-b114-36457bdb1abb",
    subscribeKey: "sub-c-fa6d9b24-7138-11eb-8178-92dbc0211330",
    SecretKey: "sec-c-YzcwNTFmZmUtOTdhZC00NTBjLTljZjYtNGE2MzQ1YzBjYjE2"
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
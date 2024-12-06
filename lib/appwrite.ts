
export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.pisc.aora',
    projectId: '6751e139002f940e711b',
    databaseId: '675261ca0032a2b518e0',
    userCollectionId: '67526209001bec6b7f7a',
    videoCollectionId: '67526254003bfe8b8b1d',
    storageId : '675264a4001223189e77'
}

import { Account, Client, ID } from 'react-native-appwrite';

const client = new Client()
client
    .setEndpoint('6751e139002f940e711b')
    .setProject('6751e139002f940e711b')
    .setPlatform('com.pisc.aora');


const account = new Account(client);

export const createUser = () => {
    account.create(ID.unique(), 'me@example.com', 'password', 'jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        }
    );
}

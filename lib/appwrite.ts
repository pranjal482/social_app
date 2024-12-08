import { Account, Avatars, Client, Databases, ID, Query, Storage } from 'react-native-appwrite';


export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.pisc.aora',
    projectId: '6751e139002f940e711b',
    databaseId: '675261ca0032a2b518e0',
    userCollectionId: '67526209001bec6b7f7a',
    videoCollectionId: '67526254003bfe8b8b1d',
    storageId : '675264a4001223189e77'
}


const client = new Client()
client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('6751e139002f940e711b')
    .setPlatform('com.pisc.aora');


const account = new Account(client);
const storage = new Storage(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(ID.unique(), email, password);
        if (!newAccount) throw new Error('Failed to create account.');
        console.log('Account created:', newAccount.$id);

        const avatarUrl = avatars.getInitials(username);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.userCollectionId,
            ID.unique(),
            {
                accountId: newAccount.$id,
                email,
                username,
                avatar: avatarUrl,
            }
        );

        return {
            accountId: newAccount.$id,
            email: newAccount.email,
            newUser: newUser.$id,
        };
    } catch (error) {
        console.error('Error creating user:', error.message);
        throw error;
    }
};


// export const signIn = async(email, password) => {
//     try {
//         const session = await account.createEmailPasswordSession(email, password);
//         console.log(session);

//         return session;
//     } catch (error) {
//         throw new Error(error)
//     }
// }


export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if(!currentAccount) throw Error ;

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.userCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )

        if(!currentUser) throw Error ;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error)
    }
}
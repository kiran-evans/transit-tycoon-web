import { env } from '$env/dynamic/private';
import type { RequestHandler } from '@sveltejs/kit';
import dotenv from 'dotenv';
import { auth as authorize, credential, database, initializeApp, type ServiceAccount } from 'firebase-admin';
import { UserRecord } from 'firebase-admin/lib/auth/user-record';

dotenv.config();
const app = initializeApp({
    credential: credential.cert({
        "type": "service_account",
        "project_id": "transit-tycoon",
        "private_key_id": env.SERVICE_ACCOUNT_KEY_ID,
        "private_key": env.SERVICE_ACCOUNT_KEY,
        "client_email": "firebase-adminsdk-9b0ds@transit-tycoon.iam.gserviceaccount.com",
        "client_id": env.SERVICE_ACCOUNT_CLIENT_ID,
        "auth_uri": "https://accounts.google.com/o/oauth2/auth",
        "token_uri": "https://oauth2.googleapis.com/token",
        "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
        "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-9b0ds%40transit-tycoon.iam.gserviceaccount.com"
    } as ServiceAccount),
    databaseURL: "https://transit-tycoon-default-rtdb.europe-west1.firebasedatabase.app"
});

const db = database(app);
const auth = authorize(app);

// Login user or create user if they don't exist
export const POST = (async ({ request }) => {
    try {
        const { email, password } = await request.json();
        if (!email || !password) return new Response(null, {
            status: 400,
            statusText: `${!email && 'email'}${!password && 'password'} missing`
        });

        let user = new UserRecord();
        auth.getUserByEmail(email)
            .then((foundUser) => {
                user = foundUser;
            })
            .catch((err) => {
                if (err.code === 'auth/user-not-found') {
                    auth.createUser({
                        email: email,
                        emailVerified: false,
                        password: password
                    }).then((newUser) => {
                        user = newUser;
                    });
                } else {
                    throw new Error(err);
                }
            })

        return new Response((await db.ref(`/users/${user.uid}`).once('value')).val(), {
            status: 200
        });

    } catch (err) {
        return new Response(null, {
            status: 500,
            statusText: JSON.stringify(err)
        });
    }
}) satisfies RequestHandler;
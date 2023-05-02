import { env } from "$env/dynamic/private";
import dotenv from 'dotenv';
import type { LayoutServerLoad } from "./$types";
import mongoose from 'mongoose';

export const load = (async () => {
    dotenv.config();

    const uri = `mongodb+srv://root:${env.MONGO_PASSWORD}@cluster0.i27nr1m.mongodb.net/?retryWrites=true&w=majority`;
    await mongoose.connect(uri);

    // Get user profile
    // Return that in the return statement

    return {
        
    };
}) satisfies LayoutServerLoad;
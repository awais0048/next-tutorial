import { NextResponse } from 'next/server';
import clientPromise from '../db';

export async function POST(req, res) {
    const data = await req.json()

    const client = await clientPromise;
    const db = client.db('seo');

    const filter = {
        email: data.email,
        password: data.password
    }
    const allPosts = await db.collection('users').find(filter).toArray();
    console.log(allPosts)
    if (allPosts.length !== 0) {
       return NextResponse.json({ status: true, data: allPosts });
    }
    else {
         return NextResponse.json({ status: false, data: allPosts });
 }
}



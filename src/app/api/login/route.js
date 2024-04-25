import { NextResponse } from 'next/server';
import clientPromise from '../db';

export async function POST(req, res) {

    function isObjectNotEmpty(obj) {
        return Object.keys(obj).length !== 0;
      }

    const data = await req.json()

    const client = await clientPromise;
    const db = client.db('seo');

    const filter = {
        email: data.email,
        password: data.password
    }
    const userFound = await db.collection('users').findOne(filter)
    

    if (isObjectNotEmpty(userFound)) {
       return NextResponse.json({ status: true, data: userFound });
    }
    else {
         return NextResponse.json({ status: false, data: userFound });
 }
}



import { NextResponse } from 'next/server';
import clientPromise from '../db';

export async function POST(req, res) {
    const data = await req.json()

    const client = await clientPromise;
    const db = client.db('seo');
const {name,email,confirmpassword,newpassword}=data
if(confirmpassword!==newpassword)
{
    return NextResponse.json({ status: false, message:"New password and confirm password not Match" });
}
    const filter = {
        name:name,
        email:email,
        password: confirmpassword
    }
    const allPosts = await db.collection('users').insertOne(filter)
    
  
       return NextResponse.json({ status: true, data: allPosts });


}



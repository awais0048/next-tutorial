import { NextResponse } from "next/server";
import clientPromise from "../db";

export async function GET(){
    //const data = await req.json()

    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const allPosts = await db.collection('movies').find({}).toArray();
    return NextResponse.json({ status: 200, data: allPosts });



}
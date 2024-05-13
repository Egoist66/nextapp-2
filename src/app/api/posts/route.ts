import { getPosts } from "@/service/getPosts";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
    const {searchParams} = new URL(req.url);
    const query = searchParams.get("q");

    let posts = await getPosts()
    if(query){
        posts = posts.filter(post => post.title.toLowerCase().trim().includes(query.toLowerCase().trim()));
        return NextResponse.json({posts});
    }


    return NextResponse.json({posts: await getPosts()});
}

export async function POST(req: Request) {
    const body = await req.json();

    return NextResponse.json({message: body});
}
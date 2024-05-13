import { getPosts } from "@/service/getPosts";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(req: Request, {params}: {params: {id: string}}) {

    const header = headers();
    const cookie = cookies();

    console.log({header, cookie});

    const id = params.id;
    if(id){
        let posts = await getPosts();
        const newPosts = posts.filter((post) => post.id !== Number(id));

        redirect("/blog")

        // return NextResponse.json({posts: newPosts});
    }

 
}
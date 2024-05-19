import { getPosts, Post } from "@/service/getPosts";
import PostCard from "@/components/features/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog",
}

export const revalidate = 60;


export default async function Blog() {
  const posts: Post[] = await getPosts();


  if (!posts.length) {
    return <div>Posts not found</div>;
  }

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">{Blog.name}</h1>

      <div className="flex flex-wrap gap-5 pt-14 justify-space-between">
       
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
        
      </div>
    </>
  );
}

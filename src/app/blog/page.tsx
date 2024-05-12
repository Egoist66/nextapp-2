import { getPosts } from "@/api/getPosts";
import PostCard from "@/components/features/PostCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: "Blog",
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <>
      <h1 className="text-3xl text-center font-bold underline">{Blog.name}</h1>

      <div className="flex flex-wrap gap-5 pt-14 justify-center">
       
        {posts.map(post => (
          <PostCard key={post.id} {...post} />
        ))}
        
      </div>
    </>
  );
}

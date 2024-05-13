import { getPost, getPosts } from "@/service/getPosts";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));
  return {
    title: post?.title,
  };
}

export const revalidate = 60;

export async function generateStaticParams(): Promise<any> {
  const posts = await getPosts();
  return posts?.map((post) => ({
    slug: post.id.toString(),
  }));
}

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));

  if (!post) {
    return <div>Post not found</div>;
  }


  return (
    <article className="bg-white rounded-lg shadow-lg p-4 mx-auto">
      <h1 className="text-4xl font-bold mb-2">{post?.title}</h1>
      <p className="text-lg font-light">Description: {post?.description}</p>
      {/* <img src={""} className="w-full h-64 object-cover" alt={title} /> */}
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          {/* <img src="/icons/user-solid.svg" className="w-10 h-10 mr-3" alt="user icon" /> */}
          <p className="text-lg">Author: {post?.author}</p>
        </div>
        <div className="flex items-center">
          {/* <img src="/icons/calendar-alt-solid.svg" className="w-10 h-10 mr-3" alt="calendar icon" /> */}
          <p className="text-lg">Date: {post?.date}</p>
        </div>
      </div>
    </article>
  );
}


// 'use server'
 
// import { redirect } from 'next/navigation'
// import { revalidatePath } from 'next/cache'
 
// export async function createPost(id: string) {
//   try {
//     // Call database
//   } catch (error) {
//     // Handle errors
//   }
 
//   revalidatePath('/posts') // Update cached posts
//   redirect(`/post/${id}`) // Navigate to the new post page
// }
import { getPost } from "@/api/getPosts";

export async function generateMetadata({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));
  return {
    title: post?.title,
  };
}

export const revalidate = 60;

export default async function Post({ params }: { params: { id: string } }) {
  const post = await getPost(Number(params.id));

  return (


    <article className="bg-white rounded-lg shadow-lg p-4 mx-auto">
      <h1 className="text-4xl font-bold mb-2">{post?.title}</h1>
      <p className="text-lg font-light">{post?.description}</p>
      {/* <img src={""} className="w-full h-64 object-cover" alt={title} /> */}
      <div className="flex justify-between mt-5">
        <div className="flex items-center">
          {/* <img src="/icons/user-solid.svg" className="w-10 h-10 mr-3" alt="user icon" /> */}
          <p className="text-lg">{post?.author}</p>
        </div>
        <div className="flex items-center">
          {/* <img src="/icons/calendar-alt-solid.svg" className="w-10 h-10 mr-3" alt="calendar icon" /> */}
          <p className="text-lg">{post?.date}</p>
        </div>
      </div>
    </article>
  );
}

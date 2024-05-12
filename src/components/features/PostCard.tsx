import Link from "next/link";

type PostProps = {
  title: string;
  description: string;
  id: number
  author: string;
  date: string;
};

export default function PostCard({
  date,
  id,
  title,
}: PostProps) {
  return (

    <Link href={`/blog/${id}`}>
      <article className="bg-white rounded-lg shadow-lg post-card p-4 mx-auto">
        <h1 className="text-4xl font-bold mb-2">{title}</h1>
        {/* <img src={""} className="w-full h-64 object-cover" alt={title} /> */}
        <div className="flex justify-between mt-5">
          <div className="flex items-center">
            <p className="text-lg text-cyan-700 ">Published: {date}</p>
          </div>
        </div>
      </article>
    </Link>
  );
}

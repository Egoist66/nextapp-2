import Link from "next/link";

export default function NotFound() {
  return (
    <div className="h-full flex items-center justify-center p-12">
      <div className="max-w-md mx-auto bg-white p-12 shadow-md rounded-xl">
        <h1 className="text-6xl font-bold text-center">404</h1>
        <p className="text-center text-2xl font-medium">
          Sorry, the review you are looking for does not exist.
        </p>
        <p className="text-center text-base text-gray-500">
          Back to <Link href="/blog" className="text-blue-500 hover:underline">Blog</Link>
        </p>
      </div>
    </div>
  );
}

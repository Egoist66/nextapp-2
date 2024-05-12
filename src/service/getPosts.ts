import { delay } from "@/utils/delay";

export type Post = {
  id: number;
  title: string;
  description: string;
  author: string;
  date: string;
};
export type Posts = Array<Post>;

export const getPosts = async (): Promise<Posts>  => {
  const posts: Posts | [] = [
    {
      id: 1,
      title: "Post 1",
      description: "This is post 1",
      author: "John Doe",
      date: "2022-01-01",
    },
    {
      id: 2,
      title: "Post 2",
      description: "This is post 2",
      author: "Jane Doe",
      date: "2022-01-02",
    },
    {
      id: 3,
      title: "Post 3",
      description: "This is post 3",
      author: "Bob Smith",
      date: "2022-01-03",
    },
    {
      id: 4,
      title: "Post 4",
      description: "This is post 4",
      author: "Alice Johnson",
      date: "2022-01-04",
    },
  ];

  await delay(1000);

  return posts;
};

export const getPost = async (id: number): Promise<Post | undefined> => {
  const posts = await getPosts();
  return posts.find((post) => post.id === id);
};

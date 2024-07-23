import { dbConnect } from "@/utils/db";

type Shoes = Array<{ id: number; name: string; description: string }>;

export const getData = async () => {
  try {
    const shoes = (await dbConnect()).query("SELECT * FROM shoes");
    await (await dbConnect()).end();

    return await shoes;
  } catch (error: any) {
    console.clear();
    console.log(error.message);

    return [];
  }
};

export const getProduct = async (id: number) => {
  try {
    const shoes = (await dbConnect()).query(
      `SELECT * FROM shoes WHERE id = ${id}`
    );
    await (await dbConnect()).end();

    return await shoes;
  } catch (error: any) {
    console.clear();
    console.log(error.message);

    return [];
  }
};

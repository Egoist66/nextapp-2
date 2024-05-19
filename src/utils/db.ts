import mysql2 from "mysql2/promise";


export const dbConnect = async (): Promise<mysql2.Connection> => {
    const connection = await mysql2.createConnection({
        host: "localhost", //127.0.0.1
        user: "root",
        password: "",
        database: "products",
    })

    return connection;
}



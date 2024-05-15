import { getData } from "@/service/getData";
import { writeFile } from "fs";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {

    let shoes: any = await getData()
    writeFile('shoes.json', JSON.stringify( shoes[0]), (err) => {
        if (err) throw err
    })
    if(shoes?.length){
        return NextResponse.json({shoes: shoes[0]});
    }
    

}

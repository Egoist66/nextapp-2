import { getData } from "@/service/getData";
import { NextResponse } from "next/server";

export async function GET(req: Request, res: Response) {

    let shoes = await getData()
    if(shoes?.length){
        return NextResponse.json({shoes: shoes[0]});
    }
    

}

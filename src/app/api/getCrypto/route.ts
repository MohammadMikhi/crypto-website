import { getCryptoData } from "@/app/services/apiHelper";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest){
    const response = await getCryptoData(request)
    return response
}
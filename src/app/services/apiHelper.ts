import { NextRequest, NextResponse } from "next/server";

export async function getCryptoData(request: NextRequest) {
  try {
    const response = await fetch("https://api.coincap.io/v2/assets", {
      method: "GET",
    });
    return response
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: " Something went wrong. Please try again later",
        status: "error",
      },
      { status: 500 }
    );
  }
}

import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(request) {
    const body = await request.json().catch(() => null);
    const action = body?.action;


    if (!action) {
        return NextResponse.json(
            { message: "A valid action is required." },
            { status: 400 }
        );
    }

    if (action === "new-added-pet") {

        revalidatePath("/all-pets");
        console.log("Revalidated /all-pets due to new pet addition.");
    } else {
        return NextResponse.json(
            { message: "Unknown action." },
            { status: 400 }
        );
    }
    return NextResponse.json({
        revalidated: true,
        action: action,
    });
}

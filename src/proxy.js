import { NextResponse } from 'next/server'
import { getSession } from './app/lib/action'

// This function can be marked `async` if using `await` inside
export async function proxy(request) {
    const { session, token } = await getSession();
    console.log("Session in middleware:", session, token);
    if (!session || !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()

}


export const config = {
    matcher: ['/all-pets/:path+', '/dashboard/:path*', '/profile',],
}
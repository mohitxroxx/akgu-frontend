import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  console.log(path);

  const isPublicPath = path === '/admin/login'

  const token = request.cookies.get('auth').value
  console.log(token);

  if(token) {
    console.log("hi")
    return NextResponse.redirect(new URL('/dashboard', request.nextUrl))
  }
  
  if (!token) {
    console.log("ho")
    return NextResponse.redirect(new URL('/admin/login', request.nextUrl))
  }
    
}

 
export const config = {
  matcher: [
    '/',
    '/dashboard',
    '/dashboard/faculty',
    '/dashboard/achievement',
  ]
}
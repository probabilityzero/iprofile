import { NextRequest, NextResponse } from 'next/server'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const { pathname } = req.nextUrl
  
  const parts = host.split('.')
  const isCustomDomainWithSubdomain = 
    parts.length >= 3 || 
    (parts.length === 2 && !host.includes('vercel.app') && !host.includes('localhost'))
  
  if (isCustomDomainWithSubdomain) {
    const subdomain = parts[0]
    if (subdomain !== 'www') {
      return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url))
    }
  }

  // For Vercel domains, don't redirect - just let the path-based routing work
  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon|.*\\..*).*)'],
}
import { NextRequest, NextResponse } from 'next/server'

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const { pathname } = req.nextUrl
  const subdomain = host.split('.')[0]
  const isSubdomain = subdomain !== 'localhost' && subdomain !== 'www' && host.includes('.')

  if (isSubdomain) {
    return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url))
  }

  const firstSegment = pathname.split('/')[1]

  if (firstSegment) {
    const restPath = pathname.slice(firstSegment.length + 1) || ''
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    return NextResponse.redirect(`${protocol}://${firstSegment}.${ROOT_DOMAIN}${restPath}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon|.*\\..*).*)'],
}
import { NextRequest, NextResponse } from 'next/server'

const ROOT_DOMAIN = process.env.NEXT_PUBLIC_ROOT_DOMAIN || 'localhost:3000'

export function middleware(req: NextRequest) {
  const host = req.headers.get('host') || ''
  const { pathname } = req.nextUrl
  const isPath = pathname.split('/')[1]
  const subdomain = host.split('.')[0]
  const isSubdomain = subdomain !== 'localhost' && subdomain !== 'www' && host.includes('.')

  if (isSubdomain) {
    return NextResponse.rewrite(new URL(`/${subdomain}${pathname}`, req.url))
  }


  if (isPath) {
    const subPath = pathname.slice(isPath.length + 1) || ''
    const protocol = process.env.NODE_ENV === 'production' ? 'https' : 'http'
    return NextResponse.redirect(`${protocol}://${isPath}.${ROOT_DOMAIN}${subPath}`)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next|favicon|.*\\..*).*)'],
}
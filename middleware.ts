import { NextRequest, NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

// Get the preferred locale from the request
function getLocale(request: NextRequest): string {
  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname;
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);
    return locale;
  }

  return defaultLocale;
}

function getPreferredLocale(request: NextRequest): string {
  // Check Accept-Language header
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const preferredLocale = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .find(lang => locales.includes(lang.split('-')[0]));

    if (preferredLocale) {
      return preferredLocale.split('-')[0];
    }
  }

  // Check stored locale in cookie
  const storedLocale = request.cookies.get('locale')?.value;
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale;
  }

  return defaultLocale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = locales.every(
    locale => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getPreferredLocale(request);

    // Handle root path
    if (pathname === '/') {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }

    // Handle other paths
    return NextResponse.redirect(new URL(`/${locale}${pathname}`, request.url));
  }

  // Extract locale from pathname
  const pathnameLocale = pathname.split('/')[1];

  // Validate locale
  if (!locales.includes(pathnameLocale)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Set locale cookie
  const response = NextResponse.next();
  response.cookies.set('locale', pathnameLocale, {
    maxAge: 60 * 60 * 24 * 365, // 1 year
    httpOnly: false,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
  });

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};

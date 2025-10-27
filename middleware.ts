import { NextRequest, NextResponse } from 'next/server';

const locales = ['ar', 'en'];
const defaultLocale = 'ar';

function getPreferredLocale(request: NextRequest): string {
  // Check stored locale in cookie first (user's previous choice)
  const storedLocale = request.cookies.get('locale')?.value;
  if (storedLocale && locales.includes(storedLocale)) {
    return storedLocale;
  }

  // Check Accept-Language header for new users
  const acceptLanguage = request.headers.get('accept-language');
  if (acceptLanguage) {
    const languages = acceptLanguage
      .split(',')
      .map(lang => lang.split(';')[0].trim())
      .map(lang => lang.split('-')[0]);

    for (const lang of languages) {
      if (locales.includes(lang)) {
        return lang;
      }
    }
  }

  // Default to Arabic for new users
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

    // Create redirect response
    let redirectUrl;
    if (pathname === '/') {
      redirectUrl = new URL(`/${locale}`, request.url);
    } else {
      redirectUrl = new URL(`/${locale}${pathname}`, request.url);
    }

    // Set the locale cookie when redirecting (for new users)
    const response = NextResponse.redirect(redirectUrl);
    response.cookies.set('locale', locale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return response;
  }

  // Extract locale from pathname
  const pathnameLocale = pathname.split('/')[1];

  // Validate locale
  if (!locales.includes(pathnameLocale)) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }

  // Set locale cookie only if it differs from current cookie
  const response = NextResponse.next();
  const currentCookie = request.cookies.get('locale')?.value;

  if (currentCookie !== pathnameLocale) {
    response.cookies.set('locale', pathnameLocale, {
      maxAge: 60 * 60 * 24 * 365, // 1 year
      httpOnly: false,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });
  }

  return response;
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|favicon.ico|.*\\..*).*)',
  ],
};

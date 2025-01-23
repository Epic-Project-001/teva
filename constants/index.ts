export const ENVIRONMENT =
  process.env.APP_ENV || process.env.NEXT_PUBLIC_APP_ENV || "development";

const BASE_URL_LOCAL =
    process.env.BASE_URL_LOCAL || process.env.NEXT_PUBLIC_BASE_URL_LOCAL,
  BASE_URL_DEVELOPMENT =
    process.env.BASE_URL_DEVELOPMENT ||
    process.env.NEXT_PUBLIC_BASE_URL_DEVELOPMENT,
  BASE_URL_PRODUCTION =
    process.env.BASE_URL_PRODUCTION ||
    process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;

export const BASE_URL =
  {
    local: BASE_URL_LOCAL,
    development: BASE_URL_DEVELOPMENT,
    production: BASE_URL_PRODUCTION,
  }[ENVIRONMENT] || "https://tevapharmaceuticals.com";

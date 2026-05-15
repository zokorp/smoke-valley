const configToken = '';
const envToken = import.meta.env.PUBLIC_CLOUDFLARE_WEB_ANALYTICS_TOKEN?.trim() ?? '';

export const analytics = {
  cloudflareWebAnalyticsToken: envToken || configToken,
} as const;

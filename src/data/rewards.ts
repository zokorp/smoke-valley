const rewardsFallbackMessage = encodeURIComponent('Hi Smoke Valley, I want to sign up for rewards.');
const remindSignupUrl: string | null = null;

export const rewards = {
  provider: 'Remind',
  signupUrl: remindSignupUrl,
  fallbackHref: `https://wa.me/13467020896?text=${rewardsFallbackMessage}`,
  signupHref: remindSignupUrl ?? `https://wa.me/13467020896?text=${rewardsFallbackMessage}`,
  popupDismissHours: 24,
  popupMessage: 'Sign up using your phone number to gain access to rewards when purchasing in-store.',
} as const;

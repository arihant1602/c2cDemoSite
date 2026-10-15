/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Origin of the Zeroara deployment that serves /sdk/zeroara.js (default: https://zeroara.vercel.app). */
  readonly VITE_ZEROARA_ORIGIN?: string;
  /** 'auto' (default), 'popup', 'iframe' or 'desktop'. */
  readonly VITE_ZEROARA_MODE?: string;
  /** Verifier API base URL for desktop mode (default: VITE_ZEROARA_ORIGIN). */
  readonly VITE_ZEROARA_API?: string;
}

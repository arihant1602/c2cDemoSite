/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Origin of the Zeroara deployment that serves /sdk/zeroara.js (default: https://zeroara.vercel.app). */
  readonly VITE_ZEROARA_ORIGIN?: string;
  /** 'auto' (default), 'popup' or 'iframe'. */
  readonly VITE_ZEROARA_MODE?: string;
}

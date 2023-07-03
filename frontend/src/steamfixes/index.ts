let fixes: Function[] = [];

export function deinitSteamFixes() {
  fixes.forEach((deinit) => deinit());
}

export async function initSteamFixes() {
  // TODO: Add Toaster SteamFix
}

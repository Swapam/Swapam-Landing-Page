// lib/redirect.ts

/**
 * Determines if the user is coming from an ad based on URL parameters
 */
export function isFromAd(): boolean {
  try {
    // Only run on client side
    if (typeof window === "undefined") return false;

    const urlParams = new URLSearchParams(window.location.search);
    console.log("URL params:", Object.fromEntries(urlParams.entries()));

    // Check for common ad platform parameters
    const isAd =
      urlParams.has("gclid") || // Google Ads
      urlParams.has("fbclid") || // Facebook Ads
      urlParams.has("utm_source") || // UTM tracking
      urlParams.has("campaign_id"); // General ad campaigns

    return isAd;
  } catch (error) {
    console.error("Error checking if from ad:", error);
    return false;
  }
}

/**
 * Detects the mobile operating system based on user agent
 */
export function getMobileOperatingSystem(): "iOS" | "Android" | "unknown" {
  try {
    // Only run on client side
    if (typeof window === "undefined") return "unknown";

    const userAgent =
      navigator.userAgent || navigator.vendor || (window as any).opera;

    // iOS detection
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      console.log("Detected iOS device");
      return "iOS";
    }

    // Android detection
    if (/android/i.test(userAgent)) {
      console.log("Detected Android device");
      return "Android";
    }

    console.log("Unknown operating system");
    return "unknown";
  } catch (error) {
    // console.error("Error detecting operating system:", error);
    return "unknown";
  }
}

/**
 * App store URLs
 */
const APP_STORES = {
  iOS: "https://apps.apple.com/ng/app/swapam/id6736902828",
  Android:
    "https://play.google.com/store/apps/details?id=com.mxnuchim.Swapam_App&hl=en&pli=1",
};

/**
 * Redirects to the appropriate app store if user is coming from an ad
 * Returns true if redirect happened, false otherwise
 */
export function handleAdRedirect(): boolean {
  try {
    const fromAd = isFromAd();

    // If not from ad, exit early
    if (!fromAd) {
      return false;
    }

    const os = getMobileOperatingSystem();

    // Only redirect for mobile operating systems
    if (os === "iOS" || os === "Android") {
      const redirectUrl = APP_STORES[os];

      // Add a small delay to ensure logs are visible
      setTimeout(() => {
        window.location.href = redirectUrl;
      }, 500);

      return true;
    } else {
    }

    return false;
  } catch (error) {
    console.error("Error in handleAdRedirect:", error);
    return false;
  } finally {
    // console.log("=== REDIRECT HANDLER COMPLETED ===");
  }
}

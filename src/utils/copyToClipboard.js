import copy from "copy-to-clipboard";
import { notifySooner } from "./notifySooner";

/**
 * Copy text to clipboard and show toast
 * @param {string} text - text to copy
 * @param {object} options
 * @param {string} options.successMessage
 * @param {string} options.errorMessage
 */
export function copyToClipboard(
  text,
  { successMessage = "Copied to clipboard", errorMessage = "Copy failed" } = {},
) {
  if (!text) {
    notifySooner.error(errorMessage);
    return false;
  }

  const success = copy(text);

  if (success) {
    notifySooner.success(successMessage);
  } else {
    notifySooner.error(errorMessage);
  }

  return success;
}

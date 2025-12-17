import { toast } from "sonner";

export const notifySooner = {
  success(message, options = {}) {
    toast.success(message, {
      duration: 2500,
      ...options,
    });
  },

  error(message, options = {}) {
    toast.error(message, {
      duration: 3000,
      ...options,
    });
  },

  info(message, options = {}) {
    toast(message, {
      duration: 2000,
      ...options,
    });
  },
};

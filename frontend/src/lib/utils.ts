import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatTimeForBackend = (time) => {
  if (!time) return null
  return time.length === 5 ? `${time}:00` : time
}

export function truncateText(text, maxLength) {
  if (text && text.length > maxLength) {
    return text.substring(0, maxLength) + "...";
  }

  return text;
}
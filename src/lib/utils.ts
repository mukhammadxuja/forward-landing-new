import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const sum = (...args: number[]) => {
  return args.reduce((acc, curr) => acc + curr, 0);
};

export const debounce = <T extends (...args: Parameters<T>) => void>(
  func: T,
  intervalMs = 64,
): ((...args: Parameters<T>) => void) => {
  let id: ReturnType<typeof setTimeout> | null;

  return (...args: Parameters<T>) => {
    if (id) {
      clearTimeout(id);
    }

    id = setTimeout(() => {
      func(...args);
    }, intervalMs);
  };
};

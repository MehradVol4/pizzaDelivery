import { useEffect, useState } from "react";

export default function useLocalStorageState(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key);
      if (stored == null) return initialValue;
      return JSON.parse(stored);
    } catch {
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // ignore write errors (private mode, quotas, etc.)
    }
  }, [key, value]);

  return [value, setValue];
}


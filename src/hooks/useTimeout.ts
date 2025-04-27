import { useCallback, useEffect } from "react";

export function useTimeout(callback: () => void, timeoutMs: number) {
  const memoizedCallback = useCallback(callback, [callback]);

  useEffect(() => {
    const timeout = setTimeout(memoizedCallback, timeoutMs);
    return () => clearTimeout(timeout);
  }, []);
}

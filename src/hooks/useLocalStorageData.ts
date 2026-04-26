import { useState, useEffect, useCallback } from 'react';

/**
 * Generic localStorage CRUD hook.
 * Mirrors the behaviour of the original TabancaData helpers.
 */
export function useLocalStorageData<T extends { id: number }>(
  key: string,
  fallbackUrl: string,
  hardcodedFallback: T[]
) {
  const [data, setData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  // Initial load: localStorage → fetch JSON → hardcoded
  useEffect(() => {
    async function load() {
      const stored = localStorage.getItem(key);
      if (stored) {
        try {
          setData(JSON.parse(stored));
          setLoading(false);
          return;
        } catch {
          localStorage.removeItem(key);
        }
      }
      try {
        const res = await fetch(fallbackUrl);
        const json: T[] = await res.json();
        setData(json);
        localStorage.setItem(key, JSON.stringify(json));
      } catch {
        setData(hardcodedFallback);
        localStorage.setItem(key, JSON.stringify(hardcodedFallback));
      }
      setLoading(false);
    }
    load();
  }, [key, fallbackUrl, hardcodedFallback]);

  const save = useCallback(
    (next: T[]) => {
      setData(next);
      localStorage.setItem(key, JSON.stringify(next));
    },
    [key]
  );

  const add = useCallback(
    (item: Omit<T, 'id'>) => {
      setData(prev => {
        const maxId = prev.length ? Math.max(...prev.map(x => x.id)) : 0;
        const next = [...prev, { ...item, id: maxId + 1 } as T];
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  const update = useCallback(
    (item: T) => {
      setData(prev => {
        const next = prev.map(x => (x.id === item.id ? item : x));
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  const remove = useCallback(
    (id: number) => {
      setData(prev => {
        const next = prev.filter(x => x.id !== id);
        localStorage.setItem(key, JSON.stringify(next));
        return next;
      });
    },
    [key]
  );

  return { data, loading, save, add, update, remove };
}

/** Returns initials from a display name ("Marcus Reid" → "MR") */
export function toInitials(name: string): string {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(p => p.charAt(0).toUpperCase())
    .join('');
}

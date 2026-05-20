'use client';

import { useState, useEffect, useCallback } from 'react';

// ==============================|| LOCAL STORAGE HOOKS ||============================== //

export function useLocalStorage(key, defaultValue) {
  const [state, setState] = useState(defaultValue);

  // Load initial state from localStorage after mount to be hydration-safe
  useEffect(() => {
    try {
      const item = localStorage.getItem(key);
      if (item) {
        setState(JSON.parse(item));
      }
    } catch (err) {
      console.warn(`Error reading localStorage key “${key}”:`, err);
    }
  }, [key]);

  // Sync to localStorage whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(state));
    } catch (err) {
      console.warn(`Error setting localStorage key “${key}”:`, err);
    }
  }, [key, state]);

  // Update single field
  const setField = useCallback((key, value) => {
    setState((prev) => ({
      ...prev,
      [key]: value
    }));
  }, []);

  // Reset to defaults
  const resetState = useCallback(() => {
    setState(defaultValue);
    localStorage.setItem(key, JSON.stringify(defaultValue));
  }, [defaultValue, key]);

  return { state, setState, setField, resetState };
}

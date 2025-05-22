export function strictKeys<T>() {
  return <K extends keyof T>(keys: K[]) => keys;
}

export function strictKey<T>() {
  return <K extends keyof T>(key: K) => key;
}

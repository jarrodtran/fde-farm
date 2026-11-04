export interface Context {
  // Request-scoped dependencies (auth, database) attach here.
}

export const createContext = (): Context => ({});

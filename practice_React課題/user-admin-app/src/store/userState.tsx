import { createContext, useState, type ReactNode } from 'react';
import type { User, UserContextType } from '../types/api/user';

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  return <UserContext value={{ user, setUser }}>{children}</UserContext>;
};

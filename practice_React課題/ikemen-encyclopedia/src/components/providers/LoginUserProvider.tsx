import { createContext, useContext, useState, type ReactNode } from 'react';

export const LoginUserContext = createContext<LoginUserContextType | undefined>(undefined);

export const LoginUserProvider = ({ children }: { children: ReactNode }) => {
  const [loginUser, setLoginUser] = useState<User | null>(null);
  const [favoriteId, setFavoriteId] = useState<number | null>(null);

  return <LoginUserContext value={{ loginUser, setLoginUser, favoriteId, setFavoriteId }}>{children}</LoginUserContext>;
};

export const useLoginUser = () => {
  const context = useContext(LoginUserContext);
  if (context === undefined) {
    // Providerの外で使おうとしたらエラーを出す（安全策）
    throw new Error('useLoginUser must be used within a LoginUserProvider');
  }
  return context;
};

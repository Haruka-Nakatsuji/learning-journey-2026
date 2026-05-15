interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  company: {
    name: string;
    catchPhrase: string;
  };
}

interface LoginUserContextType {
  loginUser: User | null;
  setLoginUser: React.Dispatch<React.SetStateAction<User | null>>;
  favoriteId?: number | null;
  setFavoriteId: React.Dispatch<React.SetStateAction<number | null>>;
}
